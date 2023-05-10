// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Bayc = await hre.ethers.getContractFactory("Bayc");
  console.log(`Deploying contract with the account: ${Bayc.signer.address}`);

  const deplyedBayc = await Bayc.deploy();
  console.log(`Contract deployed to ${deplyedBayc.address} on ${hre.network.name}`);

  // await deplyedBayc.deployed();
  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await deplyedBayc.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Verifying contract on Etherscan...`);
  await hre.run(`verify:verify`, {
    address: deplyedBayc.address,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
