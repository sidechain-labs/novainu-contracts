/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniNftManager, UniNftManagerInterface } from "../UniNftManager";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "amount0Max",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amount1Max",
            type: "uint128",
          },
        ],
        internalType: "struct UniNftManager.CollectParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "positions",
    outputs: [
      {
        internalType: "uint96",
        name: "nonce",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside0LastX128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside1LastX128",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "tokensOwed0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "tokensOwed1",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061021a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636352211e1461004657806399fbab881461006f578063fc6f78651461009a575b600080fd5b6100596100543660046100fc565b6100bb565b6040516100669190610128565b60405180910390f35b61008261007d3660046100fc565b6100c1565b6040516100669c9b9a9998979695949392919061014a565b6100ad6100a83660046100e5565b6100dd565b60405161006692919061013c565b50600090565b6000808080808080808080808091939597999b5091939597999b565b600080915091565b6000608082840312156100f6578081fd5b50919050565b60006020828403121561010d578081fd5b5035919050565b60020b9052565b6001600160801b03169052565b6001600160a01b0391909116815260200190565b918252602082015260400190565b6001600160601b038d1681526001600160a01b038c811660208301528b811660408301528a16606082015262ffffff89166080820152600288900b60a0820152610180810161019c60c0830189610114565b6101a960e083018861011b565b85610100830152846101208301526101c561014083018561011b565b6101d361016083018461011b565b9d9c5050505050505050505050505056fea2646970667358221220b99292fe92c424c375e1756e7e0f75867289bc77222c53e855fbbf92b162745b64736f6c634300060c0033";

export class UniNftManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniNftManager> {
    return super.deploy(overrides || {}) as Promise<UniNftManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniNftManager {
    return super.attach(address) as UniNftManager;
  }
  connect(signer: Signer): UniNftManager__factory {
    return super.connect(signer) as UniNftManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniNftManagerInterface {
    return new utils.Interface(_abi) as UniNftManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniNftManager {
    return new Contract(address, _abi, signerOrProvider) as UniNftManager;
  }
}
