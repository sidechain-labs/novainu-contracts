/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EsNovaBatchSender,
  EsNovaBatchSenderInterface,
} from "../EsNovaBatchSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_esNova",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [],
    name: "esNova",
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
        internalType: "contract IVester",
        name: "_vester",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minRatio",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a3d380380610a3d8339818101604052602081101561003357600080fd5b5051600080546001600160a01b03199081163317909155600180546001600160a01b03909316929091169190911790556109cb806100726000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638b8f837b14610046578063a4e4d74014610180578063f851a440146101a4575b600080fd5b61017e6004803603608081101561005c57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561008b57600080fd5b82018360208201111561009d57600080fd5b803590602001918460208302840111600160201b831117156100be57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561010d57600080fd5b82018360208201111561011f57600080fd5b803590602001918460208302840111600160201b8311171561014057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101ac945050505050565b005b61018861071f565b604080516001600160a01b039092168252519081900360200190f35b61018861072e565b6000546001600160a01b0316331461020a576040805162461bcd60e51b815260206004820152601c60248201527b22b9a737bb30a130ba31b429b2b73232b91d103337b93134b23232b760211b604482015290519081900360640190fd5b6000846001600160a01b0316636bcb411a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561024557600080fd5b505afa158015610259573d6000803e3d6000fd5b505050506040513d602081101561026f57600080fd5b5051905060005b83518110156107175760015484516001600160a01b03909116906323b872dd9033908790859081106102a457fe5b60200260200101518685815181106102b857fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b15801561031657600080fd5b505af115801561032a573d6000803e3d6000fd5b505050506040513d602081101561034057600080fd5b505082516000906103f19085908490811061035757fe5b6020026020010151886001600160a01b031663b71bce2a88868151811061037a57fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103bf57600080fd5b505afa1580156103d3573d6000803e3d6000fd5b505050506040513d60208110156103e957600080fd5b50519061073d565b9050866001600160a01b031663d0b038b786848151811061040e57fe5b6020026020010151836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561045d57600080fd5b505af1158015610471573d6000803e3d6000fd5b505050506000836001600160a01b0316633792def387858151811061049257fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104d757600080fd5b505afa1580156104eb573d6000803e3d6000fd5b505050506040513d602081101561050157600080fd5b505190506000610511828461073d565b90506000896001600160a01b03166345f01ee689878151811061053057fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d602081101561059f57600080fd5b505190506105ad828a61079e565b8111156105bd575050505061070f565b60006105c98a8461079e565b905061067561066e84610668878b6001600160a01b031663a31802178f8d815181106105f157fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561063657600080fd5b505afa15801561064a573d6000803e3d6000fd5b505050506040513d602081101561066057600080fd5b50519061079e565b906107f7565b8290610836565b905061068585610668838661079e565b90508a6001600160a01b031663e3ecc4b28a88815181106106a257fe5b6020026020010151836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b5050505050505050505b600101610276565b505050505050565b6001546001600160a01b031681565b6000546001600160a01b031681565b600082820183811015610795576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b90505b92915050565b6000826107ad57506000610798565b828202828482816107ba57fe5b04146107955760405162461bcd60e51b81526004018080602001828103825260218152602001806109756021913960400191505060405180910390fd5b600061079583836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610878565b600061079583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061091a565b600081836109045760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108c95781810151838201526020016108b1565b50505050905090810190601f1680156108f65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161091057fe5b0495945050505050565b6000818484111561096c5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108c95781810151838201526020016108b1565b50505090039056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220eac5c7370e5f1c81fc75a5c90cbabb1c31a870bf843707cbbdcdca4406dd939064736f6c634300060c0033";

export class EsNovaBatchSender__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _esNova: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EsNovaBatchSender> {
    return super.deploy(_esNova, overrides || {}) as Promise<EsNovaBatchSender>;
  }
  getDeployTransaction(
    _esNova: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_esNova, overrides || {});
  }
  attach(address: string): EsNovaBatchSender {
    return super.attach(address) as EsNovaBatchSender;
  }
  connect(signer: Signer): EsNovaBatchSender__factory {
    return super.connect(signer) as EsNovaBatchSender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EsNovaBatchSenderInterface {
    return new utils.Interface(_abi) as EsNovaBatchSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EsNovaBatchSender {
    return new Contract(address, _abi, signerOrProvider) as EsNovaBatchSender;
  }
}
