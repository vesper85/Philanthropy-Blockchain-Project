pragma solidity >=0.4.22 <0.9.0;

contract Donations {

    struct Donation {
        address donor;
        uint amount;
    }

    struct Charity {
        string name;
        uint amount;
        uint donationCount;
        mapping (uint => Donation) transactions;
    }

    event CharityCreated(
        string name,
        uint amount,
        uint donationCount,
        Donation transactions
    );

    event AmountUpdated(
        string name,
        uint amount,
        uint donationCount,
        Donation transactions
    );

    event AmountTransferred(
        string name,
        uint amount,
        uint donationCount,
        Donation transactions
    );

    mapping(string => Charity) charities;

    function createCharity(string memory _name) public {
        charities[_name].name = _name;
        charities[_name].amount = 0;
        charities[_name].donationCount = 0;
        emit CharityCreated(charities[_name].name, charities[_name].amount, charities[_name].donationCount, charities[_name].transactions[0]);
    }

    function updateAmount(string memory _name) public payable {
        charities[_name].amount = charities[_name].amount + msg.value;
        uint _count = charities[_name].donationCount;
        charities[_name].transactions[_count] = Donation(msg.sender, msg.value);
        charities[_name].donationCount = _count + 1;
        emit AmountUpdated(charities[_name].name, charities[_name].amount, charities[_name].donationCount, charities[_name].transactions[_count]);
    }

    function transferAmount(address _charityAddress, string memory _name) public {
        uint _amount = charities[_name].amount;
        address payable _address = payable(_charityAddress);
        _address.transfer(_amount);

        for(uint i=0; i<charities[_name].donationCount; i++) {
            charities[_name].transactions[i].amount = 0;
            charities[_name].transactions[i].donor = address(0x0000000000000000000000000000000000000000);
        }

        charities[_name].amount = 0;
        charities[_name].donationCount = 0;

        emit AmountTransferred(charities[_name].name, charities[_name].amount, charities[_name].donationCount, charities[_name].transactions[1]);
    }
}