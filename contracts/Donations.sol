pragma solidity >=0.4.22 <0.9.0;

contract Donations {

    struct Charity {
        string name;
        uint amount;
    }

    event CharityCreated(
        string name,
        uint amount
    );

    event AmountUpdated(
        string name,
        uint amount
    );

    event AmountTransferred(
        string name,
        uint amount
    );

    mapping(string => Charity) charities;

    function createCharity(string memory _name) public {
        charities[_name] = Charity(_name, 0);
        emit CharityCreated(_name, 0);
    }

    function updateAmount(string memory _name) public payable {
        charities[_name].amount = charities[_name].amount + msg.value;
        emit AmountUpdated(charities[_name].name, charities[_name].amount);
    }

    function transferAmount(address _charityAddress, string memory _name) public {
        uint _amount = charities[_name].amount;
        address payable _address = payable(_charityAddress);
        _address.transfer(_amount);
        charities[_name].amount = 0;
        emit AmountTransferred(charities[_name].name, charities[_name].amount);
    }
}