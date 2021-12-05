const { assert } = require('chai')
const Donations = artifacts.require('../contracts/Donations.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Donations', ([deployer, charity, donor]) => {
    let donation
    
    before(async() => {
        donation = await Donations.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await Donations.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })

    describe('charities', async() => {
        it('allows users to donate', async() => {
            let oldCharityBalance
            oldCharityBalance = await web3.eth.getBalance("0x13c7E438E05C1Adb45464Df7d95AF167CAd6dBAE")
            oldCharityBalance = new web3.utils.BN(oldCharityBalance)
            
            result = await donation.makeDonation("0x13c7E438E05C1Adb45464Df7d95AF167CAd6dBAE", {from: donor, value: web3.utils.toWei('1', 'Ether')})
            //Success
            const event = result.logs[0].args
            assert.equal(event.amount, '1000000000000000000', "amount is correct")

            let newCharityBalance
            newCharityBalance = await web3.eth.getBalance("0x13c7E438E05C1Adb45464Df7d95AF167CAd6dBAE")
            newCharityBalance = new web3.utils.BN(newCharityBalance)

            let amount
            amount = web3.utils.toWei('1', 'Ether')
            amount = new web3.utils.BN(amount)

            const expectedBalance = oldCharityBalance.add(amount)
            assert.equal(newCharityBalance.toString(), expectedBalance.toString(), "donation is transferred")
        })
    })
})