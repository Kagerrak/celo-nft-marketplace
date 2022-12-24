const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  // Deploy the contract
  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  // Print the address of the NFT contract
  console.log("Celo NFT deployed to: ", celoNftContract.address);

  // Load the NFTMarketplace contract artifacts
  const NFTMarketplaceFactory = await ethers.getContractFactory(
    "NFTMarketplace"
  );
  // Deploy the contract
  const nftMarketplaceContract = await NFTMarketplaceFactory.deploy();
  // wait for the deployment to finish
  await nftMarketplaceContract.deployed();

  // Log the address of the new Contract
  console.log("NFTMarketplace deployed to: ", nftMarketplaceContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
