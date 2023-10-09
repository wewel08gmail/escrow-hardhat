// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  //const Lock = await hre.ethers.getContractFactory("Escrow");
  //const contract = await hre.ethers.deployContract("Escrow");

  //await contract.waitForDeployment();


  const ContractFactory = await hre.ethers.getContractFactory("Escrow");

  // Define the constructor arguments
  const arg1 = "0x80C86b3cBE734E0d7EDbb78aC0e3F81f47D8360d"; //arbiter
  const arg2 = "0x80C86b3cBE734E0d7EDbb78aC0e3F81f47D8360d"; //beneficiary

  // Deploy the contract with the provided arguments
  const contractInstance = await ContractFactory.deploy(arg1, arg2);

  // Wait for the contract deployment transaction to be mined
  await contractInstance.deployed();

  console.log("Contract deployed to:", contractInstance.address);

  /*
  console.log(
    `Contract was deployed to ${contractInstance.target}`
  );
  */
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
