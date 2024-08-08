import { contractAbi } from "./abi"

export const SuperSaveContract = {
  address: process.env.NETWORK_ENVIRONMENT === "MAINNET" ? "0" : "0x9486b1A6AF20102E95d7f2d3b0a72B086b2F5FaC",
  abi: contractAbi,
}
