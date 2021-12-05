pragma solidity >=0.4.22 <0.9.0;

contract Donations {

    event DonationMade(
        address payable charityAccount,
        uint amount
    );

    function makeDonation(address _charityAddress) public payable {
        (payable(_charityAddress)).transfer(msg.value);
        emit DonationMade(payable(_charityAddress), msg.value);
    }
}