const GasPrice = artifacts.require("GasPrice");

module.exports = function (deployer) {
  deployer.deploy(GasPrice);
};
