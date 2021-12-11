const { assert } = require('chai')
const Donations = artifacts.require('../contracts/Donations.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Donations', ([donor1, donor2, donor3]) => {
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
        it('allows to create new charity', async() => {
            result = await donation.createCharity('New contract test charity')
            const event = result.logs[0].args
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '0', 'amount is correct')
            //assert.equal(event.transactions, ['0x0000000000000000000000000000000000000000', '0'], 'transactions are correct')
        })

        it('allows to update the charity funds', async() => {
            result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor1})
            const event = result.logs[0].args
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '1000000000000000000', 'amount is correct')
            //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        })

        it('allows to update the charity funds second time', async() => {
            result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor2})
            const event = result.logs[0].args
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '2000000000000000000', 'amount is correct')
            //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        })

        it('allows to update the charity funds third time', async() => {
            result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor3})
            const event = result.logs[0].args
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '3000000000000000000', 'amount is correct')
            //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        })

        it('allows to transfer funds', async() => {
            let oldCharityBalance = await web3.eth.getBalance('0x6029f0c802CdB7776F2803BD73835578b72cF8f2')
            oldCharityBalance = new web3.utils.BN(oldCharityBalance)
            
            result = await donation.transferAmount('0x6029f0c802CdB7776F2803BD73835578b72cF8f2', 'New contract test charity')
            const event = result.logs[0].args
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '0', 'amount is correct')
            //assert.equal(event.transactions, ['0x0000000000000000000000000000000000000000', '0', Array(2)], 'transactions are correct')

            let newCharityBalance = await web3.eth.getBalance('0x6029f0c802CdB7776F2803BD73835578b72cF8f2')
            newCharityBalance = new web3.utils.BN(newCharityBalance)

            let amount = web3.utils.toWei('3', 'Ether')
            amount = new web3.utils.BN(amount)

            const expectedBalance = oldCharityBalance.add(amount)
            assert.equal(newCharityBalance.toString(), expectedBalance.toString(), 'donation is transferred')
        })
    })
})