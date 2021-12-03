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
        let result, count, prevCount

        before(async() => {
            prevCount = await donation.count()
            result = await donation.createCharity('This is the first charity', {from: charity})
            count = await donation.count()
        })

        it('creates charities', async() => {
            //Success
            assert.equal(count.toNumber(), prevCount + 1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), count.toNumber(), "id is correct")
            assert.equal(event.name, "This is the first charity", "content is correct")
            assert.equal(event.amount, 0, "amount is correct")
            assert.equal(event.charityAccount, charity, "charity address is correct")

            //Failure
            await donation.createCharity('', {from: charity}).should.be.rejected;
        })

        it('allows users to donate', async() => {
            let oldCharityBalance
            oldCharityBalance = await web3.eth.getBalance(charity)
            oldCharityBalance = new web3.utils.BN(oldCharityBalance)
            
            result = await donation.makeDonation(count, {from: donor, value: web3.utils.toWei('1', 'Ether')})
            //Success
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), count.toNumber(), "id is correct")
            assert.equal(event.name, "This is the first charity", "content is correct")
            assert.equal(event.amount, '1000000000000000000', "amount is correct")
            assert.equal(event.charityAccount, charity, "charity address is correct")

            let newCharityBalance
            newCharityBalance = await web3.eth.getBalance(charity)
            newCharityBalance = new web3.utils.BN(newCharityBalance)

            let amount
            amount = web3.utils.toWei('1', 'Ether')
            amount = new web3.utils.BN(amount)

            const expectedBalance = oldCharityBalance.add(amount)
            assert.equal(newCharityBalance.toString(), expectedBalance.toString(), "donation is transferred")

            //Failure
            await donation.makeDonation(99, {from: donor, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;

        })
    })
})