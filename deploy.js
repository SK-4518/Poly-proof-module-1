// run the script using " npx hardhat run scripts/deploy.js --network mumbai " 
const hre = require("hardhat");

async function main() {

  const token = await hre.ethers.deployContract("MyToken");

  console.log("Token address:", await token.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
