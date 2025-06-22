require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/c587fc0589164767992f38556b16f03c", // Thay Project ID
      accounts: ["3a39ba06112a86905ba211bb682bd10c2886a497d379cb758fae7f432798bf71"] // Thay private key
    }
  }
};
