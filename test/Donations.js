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
        it('allows to create new charity', async() => {
            result = await donation.createCharity('61aca840f00521751db3e26b', 'New contract test charity')
            const event = result.logs[0].args
            assert.equal(event.id, '61aca840f00521751db3e26b', 'id is correct')
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '0', 'amount is correct')
        })

        it('allows to update the charity funds', async() => {
            result = await donation.updateAmount('61aca840f00521751db3e26b', {value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id, '61aca840f00521751db3e26b', 'id is correct')
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '5000000000000000000', 'amount is correct')
        })

        it('allows to update the charity funds second time', async() => {
            result = await donation.updateAmount('61aca840f00521751db3e26b', {value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id, '61aca840f00521751db3e26b', 'id is correct')
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '10000000000000000000', 'amount is correct')
        })

        it('allows to update the charity funds third time', async() => {
            result = await donation.updateAmount('61aca840f00521751db3e26b', {value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id, '61aca840f00521751db3e26b', 'id is correct')
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '15000000000000000000', 'amount is correct')
        })

        it('allows to transfer funds', async() => {
            let oldCharityBalance = await web3.eth.getBalance('0xd43f453840A3C9dBA02D0D8e7aAf44946628E3AE')
            oldCharityBalance = new web3.utils.BN(oldCharityBalance)
            
            result = await donation.transferAmount('0xd43f453840A3C9dBA02D0D8e7aAf44946628E3AE', '61aca840f00521751db3e26b')
            const event = result.logs[0].args
            assert.equal(event.id, '61aca840f00521751db3e26b', 'id is correct')
            assert.equal(event.name, 'New contract test charity', 'name is correct')
            assert.equal(event.amount, '0', 'amount is correct')

            let newCharityBalance = await web3.eth.getBalance("0xd43f453840A3C9dBA02D0D8e7aAf44946628E3AE")
            newCharityBalance = new web3.utils.BN(newCharityBalance)

            let amount = web3.utils.toWei('3', 'Ether')
            amount = new web3.utils.BN(amount)

            const expectedBalance = oldCharityBalance.add(amount)
            assert.equal(newCharityBalance.toString(), expectedBalance.toString(), 'donation is transferred')
        })
    })
})