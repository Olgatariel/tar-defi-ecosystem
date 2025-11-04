# TAR Ecosystem Smart Contracts

This repository contains smart contracts for the TAR DeFi ecosystem, written in Solidity and deployed using Hardhat.

## 📂 Structure

- **Token.sol** — ERC-20 implementation of the TAR token.
- **Treasury.sol** — main vault contract for holding ETH and TAR.
- **\_drafts/** — sandbox for experimental contracts.

## Deployment

To deploy contracts to Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
