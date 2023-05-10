require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY, ETHER_SCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goelri",
  networks: {
    hardhat: {},
    goelri: { 
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      },
  },
  etherscan: {
    apiKey: `${ETHER_SCAN_KEY}`, // Your Etherscan API key
  },
};
