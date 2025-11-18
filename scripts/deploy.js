const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  // 1. Deploy Token
  const Token = await ethers.getContractFactory("TarToken");
  const token = await Token.deploy(); 
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("Token deployed at:", tokenAddress);

  // 2. Deploy Treasury
  const Treasury = await ethers.getContractFactory("Treasury");
  const treasury = await Treasury.deploy(tokenAddress);
  await treasury.waitForDeployment();
  const treasuryAddress = await treasury.getAddress();
  console.log("Treasury deployed at:", treasuryAddress);

  // 3. Deploy Crowdsale - БЕЗ шляху!
  const Crowdsale = await ethers.getContractFactory("Crowdsale");
  const crowdsale = await Crowdsale.deploy(
      tokenAddress,
      treasuryAddress,
      ethers.parseEther("5"),
      ethers.parseEther("500")
  );
  await crowdsale.waitForDeployment();
  const crowdsaleAddress = await crowdsale.getAddress();
  console.log("Crowdsale deployed at:", crowdsaleAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});