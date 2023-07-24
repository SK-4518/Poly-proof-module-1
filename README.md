# Poly-proof-module-1
**Aim of the project**

To Approve the NFTs to be transferred, deposit the NFTs to the Bridge and test balanceOf on Mumbai.

**Steps to perform the bridging of the NFTs Tokens**

1. Run the npm i command to install all the project dependencies.

2. Add the private key of the wallet account by clicking on account details->enter the metamask wallet address.

3. Change the name of the .env.example file name to .env to run the contract.

4. In order to deploy the ERC20 contract on the test network, type the command "npx hardhat run scipts/deploy.js --network goerli".

5. Copy the token address displayed on successful deployment and paste it in the the tokenAddress variable present in the scripts of the project.

6. To mint the tokens to the wallet account, type the command "npx hardhat run scipts/mint.js --network goerli".

7. For the approval and deposit of the NFTs, enter the command "npx hardhat run scipts/approveDeposit.js --network goerli" onto the terminal.

8. So as to check your account for the tokens open the site "polyscan.com" . Once they arrive, click on the transaction to get the contract address for polygon.

9. Use this polygon contract address as getBalance script's tokenAddress.

10.Run npx hardhat run scipts/getBalance.js --network mumbai to see the new polygon balance.
