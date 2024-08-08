import { contractAbi } from "./abi"

export const Contract = {
  address: process.env.NETWORK_ENVIRONMENT === "MAINNET" ? "0x90" : "0x77",
  abi: contractAbi,
}
