//run the script using "npx hardhat run scripts/approveDeposit.js --network mumbai"
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x581C4B14be21Ff8Fe0A345a7B652987971cf669f"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x3658ccFDE5e9629b0805EB06AaCFc42416850961";
const walletAddress = "0x54E76a9fB000d1fb2b0D282bF4C6D9BB17Cf7F76"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 500);
    await approveTx.wait();

    console.log('Approval is confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 500, "0x6556");
    await depositTx.wait();

    console.log("Tokens  are deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
