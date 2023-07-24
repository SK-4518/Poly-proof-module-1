
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x581C4B14be21Ff8Fe0A345a7B652987971cf669f"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x54E76a9fB000d1fb2b0D282bF4C6D9BB17Cf7F76"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
