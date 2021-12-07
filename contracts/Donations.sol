pragma solidity >=0.4.22 <0.9.0;

contract Donations {

    struct Charity {
        string id;
        string name;
        uint amount;
    }

    event CharityCreated(
        string id,
        string name,
        uint amount
    );

    event AmountUpdated(
        string id,
        string name,
        uint amount
    );

    event AmountTransferred(
        string id,
        string name,
        uint amount
    );

    mapping(string => Charity) charities;

    function createCharity(string memory _id, string memory _name) public {
        charities[_id] = Charity(_id, _name, 0);
        emit CharityCreated(_id, _name, 0);
    }

    function updateAmount(string memory _id) public payable {
        charities[_id].amount = charities[_id].amount + msg.value;
        emit AmountUpdated(_id, charities[_id].name, charities[_id].amount);
    }

    function transferAmount(address _charityAddress, string memory _id) public {
        uint _amount = charities[_id].amount;
        address payable _address = payable(_charityAddress);
        _address.transfer(_amount);
        charities[_id].amount = 0;
        emit AmountTransferred(_id, charities[_id].name, charities[_id].amount);
    }
}