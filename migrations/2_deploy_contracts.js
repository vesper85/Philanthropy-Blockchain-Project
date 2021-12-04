const Donations = artifacts.require("Donations");
const test = artifacts.require("./test.sol");

module.exports = function(deployer) {
	deployer.deploy(Donations)
	deployer.deploy(test);
};