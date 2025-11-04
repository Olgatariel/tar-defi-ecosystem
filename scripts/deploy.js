const hre = require("hardhat");

async function main() {
  // 1. Отримуємо акаунт, з якого будемо деплоїти
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  // 2. Деплоїмо TarToken
  const Token = await hre.ethers.getContractFactory("TarToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("Token deployed to:", await token.getAddress());

  // 3. Деплоїмо Treasury, передаючи адресу токена в конструктор
  const Treasury = await hre.ethers.getContractFactory("Treasury");
  const treasury = await Treasury.deploy(await token.getAddress());
  await treasury.waitForDeployment();
  console.log("Treasury deployed to:", await treasury.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });