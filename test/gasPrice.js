const GasPrice = artifacts.require("GasPrice");

contract("GasLimit", () => {
  it("Should subtract the difference of the two numbers from the sum of the two numbers", async () => {
    const gasLimit = await GasPrice.deployed();
    const result = await gasLimit.gasPrice();
    console.log("This is the gas Price in wei", result.toNumber());
  });
});
