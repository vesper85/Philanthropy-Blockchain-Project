pragma solidity >=0.4.22 <0.9.0;

contract Donations {
    uint public count = 0;

    struct Charity {
        uint id;
        string name;
        address payable charityAccount;
        uint amount;
    }

    event CharityCreated(
        uint id,
        string name,
        address payable charityAccount,
        uint amount
    );

    event DonationMade(
        uint id,
        string name,
        address payable charityAccount,
        uint amount
    );

    mapping(uint => Charity) public charities;

    function createCharity(string memory _name) public {
        require(bytes(_name).length > 0);
        count++;
        charities[count] = Charity(count, _name, payable(msg.sender), 0);
        emit CharityCreated(count, _name, payable(msg.sender), 0);
    }

    function makeDonation(uint _id) public payable {
        require(_id > 0 && _id <= count);
        Charity memory _charity = charities[_id];
        _charity.charityAccount.transfer(msg.value);
        _charity.amount = _charity.amount + msg.value;
        charities[_id] = _charity;
        emit DonationMade(_charity.id, _charity.name, _charity.charityAccount, _charity.amount);
    }
}