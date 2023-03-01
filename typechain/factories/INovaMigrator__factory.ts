/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INovaMigrator, INovaMigratorInterface } from "../INovaMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "iouTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class INovaMigrator__factory {
  static readonly abi = _abi;
  static createInterface(): INovaMigratorInterface {
    return new utils.Interface(_abi) as INovaMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INovaMigrator {
    return new Contract(address, _abi, signerOrProvider) as INovaMigrator;
  }
}