require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();  // ✅ підключає .env

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;  // ✅ читає змінні з .env

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,  // ✅ безпечне підключення
      accounts: [PRIVATE_KEY],  // ✅ безпечне зберігання ключа
    },
  },
};