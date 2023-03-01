/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NOVA, NOVAInterface } from "../NOVA";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addNonStakingAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
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
    name: "id",
    outputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "inPrivateTransferMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonStakingAccounts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonStakingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "recoverClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeNonStakingAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_inPrivateTransferMode",
        type: "bool",
      },
    ],
    name: "setInPrivateTransferMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_yieldTrackers",
        type: "address[]",
      },
    ],
    name: "setYieldTrackers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "stakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "yieldTrackers",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060048152602001634e4f564160e01b815250604051806040016040528060048152602001634e4f564160e01b8152506000828282826000908051906020019062000069929190620002e4565b5081516200007f906001906020850190620002e4565b50600480546001600160a01b03191633908117909155620000a19082620000ad565b50505050505062000380565b6001600160a01b038216620000f45760405162461bcd60e51b8152600401808060200182810382526023815260200180620025366023913960400191505060405180910390fd5b620000ff82620001e3565b6200011b816002546200028260201b6200146e1790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620001509183906200146e62000282821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff16156200019e576200019a816003546200028260201b6200146e1790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b6007548110156200027e576000600782815481106200020157fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b1580156200025757600080fd5b505af11580156200026c573d6000803e3d6000fd5b505060019093019250620001e6915050565b5050565b600082820183811015620002dd576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032757805160ff191683800117855562000357565b8280016001018555821562000357579182015b82811115620003575782518255916020019190600101906200033a565b506200036592915062000369565b5090565b5b808211156200036557600081556001016200036a565b6121a680620003906000396000f3fe608060405234801561001057600080fd5b50600436106101b75760003560e01c806301e33667146101bc57806306fdde03146101f4578063095ea7b31461027157806312d43a51146102b15780631785f53c146102d557806318160ddd146102fb5780631e83409a1461031557806323b872dd1461033b578063276eab4e1461037157806327e235e314610412578063313ce5671461043857806340c10f1914610456578063429b62e51461048257806346ea87af146104a857806352cd38d9146104ce57806355b6ed5c146104eb5780635a47a1a7146105195780636021726714610538578063622890771461055e578063704802751461058457806370a08231146105aa578063817b1cd2146105d05780639554381a146105d857806395d89b41146105fe578063996f11ee146106065780639cb7de4b146106345780639dc29fac14610662578063a9059cbb1461068e578063a923fc40146106ba578063aa271e1a146107e3578063af640d0f14610809578063c93be63614610811578063cf456ae714610819578063cfad57a214610847578063dd62ed3e1461086d578063dfbaefb11461089b578063fb30d916146108a3575b600080fd5b6101f2600480360360608110156101d257600080fd5b506001600160a01b038135811691602081013590911690604001356108c9565b005b6101fc61092f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023657818101518382015260200161021e565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029d6004803603604081101561028757600080fd5b506001600160a01b0381351690602001356109bd565b604080519115158252519081900360200190f35b6102b96109d3565b604080516001600160a01b039092168252519081900360200190f35b6101f2600480360360208110156102eb57600080fd5b50356001600160a01b03166109e2565b610303610a50565b60408051918252519081900360200190f35b6101f26004803603602081101561032b57600080fd5b50356001600160a01b0316610a56565b61029d6004803603606081101561035157600080fd5b506001600160a01b03813581169160208101359091169060400135610b0d565b6101f26004803603602081101561038757600080fd5b810190602081018135600160201b8111156103a157600080fd5b8201836020820111156103b357600080fd5b803590602001918460208302840111600160201b831117156103d457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610ba7945050505050565b6103036004803603602081101561042857600080fd5b50356001600160a01b0316610c07565b610440610c19565b6040805160ff9092168252519081900360200190f35b6101f26004803603604081101561046c57600080fd5b506001600160a01b038135169060200135610c1e565b61029d6004803603602081101561049857600080fd5b50356001600160a01b0316610c8b565b61029d600480360360208110156104be57600080fd5b50356001600160a01b0316610ca0565b6102b9600480360360208110156104e457600080fd5b5035610cb5565b6103036004803603604081101561050157600080fd5b506001600160a01b0381358116916020013516610cdc565b6101f26004803603602081101561052f57600080fd5b50351515610cf9565b6103036004803603602081101561054e57600080fd5b50356001600160a01b0316610d59565b6101f26004803603602081101561057457600080fd5b50356001600160a01b0316610da2565b6101f26004803603602081101561059a57600080fd5b50356001600160a01b0316610e95565b610303600480360360208110156105c057600080fd5b50356001600160a01b0316610f06565b610303610f21565b61029d600480360360208110156105ee57600080fd5b50356001600160a01b0316610f3f565b6101fc610f54565b6101f26004803603604081101561061c57600080fd5b506001600160a01b0381358116916020013516610fae565b6101f26004803603604081101561064a57600080fd5b506001600160a01b03813516906020013515156110b5565b6101f26004803603604081101561067857600080fd5b506001600160a01b03813516906020013561112d565b61029d600480360360408110156106a457600080fd5b506001600160a01b03813516906020013561119a565b6101f2600480360360408110156106d057600080fd5b810190602081018135600160201b8111156106ea57600080fd5b8201836020820111156106fc57600080fd5b803590602001918460018302840111600160201b8311171561071d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561076f57600080fd5b82018360208201111561078157600080fd5b803590602001918460018302840111600160201b831117156107a257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506111a7945050505050565b61029d600480360360208110156107f957600080fd5b50356001600160a01b031661121b565b6101fc611230565b61030361124e565b6101f26004803603604081101561082f57600080fd5b506001600160a01b0381351690602001351515611254565b6101f26004803603602081101561085d57600080fd5b50356001600160a01b03166112cc565b6103036004803603604081101561088357600080fd5b506001600160a01b038135811691602001351661133b565b61029d611366565b6101f2600480360360208110156108b957600080fd5b50356001600160a01b031661136f565b6004546001600160a01b03163314610916576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b61092a6001600160a01b03841683836114c6565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b55780601f1061098a576101008083540402835291602001916109b5565b820191906000526020600020905b81548152906001019060200180831161099857829003601f168201915b505050505081565b60006109ca338484611518565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610a2f576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610b0957600060078281548110610a7257fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610ad457600080fd5b505af1158015610ae8573d6000803e3d6000fd5b505050506040513d6020811015610afe57600080fd5b505050600101610a59565b5050565b336000908152600b602052604081205460ff1615610b3857610b30848484611604565b506001610ba0565b6000610b82836040518060600160405280602c8152602001611fcd602c91396001600160a01b0388166000908152600660209081526040808320338452909152902054919061181a565b9050610b8f853383611518565b610b9a858585611604565b60019150505b9392505050565b6004546001600160a01b03163314610bf4576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b8051610b09906007906020840190611e24565b60056020526000908152604090205481565b601281565b336000908152600c602052604090205460ff16610c81576040805162461bcd60e51b815260206004820152601c60248201527b26b4b73a30b13632a130b9b2aa37b5b2b71d103337b93134b23232b760211b604482015290519081900360640190fd5b610b0982826118b1565b60096020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b60078181548110610cc257fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6004546001600160a01b03163314610d46576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b6001600160a01b03811660009081526008602052604081205460ff1615610d8257506000610d9d565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610df4576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610e4c5760405162461bcd60e51b81526004018080602001828103825260228152602001806120b16022913960400191505060405180910390fd5b610e55816119a3565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610e8f9161146e565b60035550565b6004546001600160a01b03163314610ee2576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b6000610f3a600354600254611a3990919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109b55780601f1061098a576101008083540402835291602001916109b5565b3360009081526009602052604090205460ff16611000576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b60005b60075481101561092a5760006007828154811061101c57fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b15801561108057600080fd5b505af1158015611094573d6000803e3d6000fd5b505050506040513d60208110156110aa57600080fd5b505050600101611003565b6004546001600160a01b03163314611102576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff16611190576040805162461bcd60e51b815260206004820152601c60248201527b26b4b73a30b13632a130b9b2aa37b5b2b71d103337b93134b23232b760211b604482015290519081900360640190fd5b610b098282611a7b565b60006109ca338484611604565b6004546001600160a01b031633146111f4576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b8151611207906000906020850190611e89565b50805161092a906001906020840190611e89565b600c6020526000908152604090205460ff1681565b6040805180820190915260048152634e4f564160e01b602082015290565b60035481565b6004546001600160a01b031633146112a1576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b6004546001600160a01b03163314611319576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b600a5460ff1681565b3360009081526009602052604090205460ff166113c1576040805162461bcd60e51b8152602060048201526014602482015260008051602061201f833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1661142e576040805162461bcd60e51b815260206004820152601e60248201527f42617365546f6b656e3a205f6163636f756e74206e6f74206d61726b65640000604482015290519081900360640190fd5b611437816119a3565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610e8f91611a39565b600082820183811015610ba0576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261092a908490611b94565b6001600160a01b03831661155d5760405162461bcd60e51b815260040180806020018281038252602881526020018061203f6028913960400191505060405180910390fd5b6001600160a01b0382166115a25760405162461bcd60e51b8152600401808060200182810382526026815260200180611fa76026913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166116495760405162461bcd60e51b81526004018080602001828103825260298152602001806121486029913960400191505060405180910390fd5b6001600160a01b03821661168e5760405162461bcd60e51b8152600401808060200182810382526027815260200180611f5d6027913960400191505060405180910390fd5b600a5460ff16156116e757336000908152600b602052604090205460ff166116e75760405162461bcd60e51b8152600401808060200182810382526025815260200180611f386025913960400191505060405180910390fd5b6116f0836119a3565b6116f9826119a3565b611736816040518060600160405280602a8152602001612067602a91396001600160a01b038616600090815260056020526040902054919061181a565b6001600160a01b038085166000908152600560205260408082209390935590841681522054611765908261146e565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff16156117aa576003546117a69082611a39565b6003555b6001600160a01b03821660009081526008602052604090205460ff16156117dc576003546117d8908261146e565b6003555b816001600160a01b0316836001600160a01b0316600080516020612091833981519152836040518082815260200191505060405180910390a3505050565b600081848411156118a95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561186e578181015183820152602001611856565b50505050905090810190601f16801561189b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0382166118f65760405162461bcd60e51b8152600401808060200182810382526023815260200180611f846023913960400191505060405180910390fd5b6118ff826119a3565b60025461190c908261146e565b6002556001600160a01b038216600090815260056020526040902054611932908261146e565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff16156119705760035461196c908261146e565b6003555b6040805182815290516001600160a01b038416916000916000805160206120918339815191529181900360200190a35050565b60005b600754811015610b09576000600782815481106119bf57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015611a1457600080fd5b505af1158015611a28573d6000803e3d6000fd5b5050600190930192506119a6915050565b6000610ba083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061181a565b6001600160a01b038216611ac05760405162461bcd60e51b81526004018080602001828103825260258152602001806121236025913960400191505060405180910390fd5b611ac9826119a3565b611b06816040518060600160405280602681526020016120d3602691396001600160a01b038516600090815260056020526040902054919061181a565b6001600160a01b038316600090815260056020526040902055600254611b2c9082611a39565b6002556001600160a01b03821660009081526008602052604090205460ff1615611b6157600354611b5d9082611a39565b6003555b6040805182815290516000916001600160a01b038516916000805160206120918339815191529181900360200190a35050565b6060611be9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c459092919063ffffffff16565b80519091501561092a57808060200190516020811015611c0857600080fd5b505161092a5760405162461bcd60e51b815260040180806020018281038252602a8152602001806120f9602a913960400191505060405180910390fd5b6060611c548484600085611c5c565b949350505050565b606082471015611c9d5760405162461bcd60e51b8152600401808060200182810382526026815260200180611ff96026913960400191505060405180910390fd5b611ca685611db8565b611cf7576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611d365780518252601f199092019160209182019101611d17565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611d98576040519150601f19603f3d011682016040523d82523d6000602084013e611d9d565b606091505b5091509150611dad828286611dbe565b979650505050505050565b3b151590565b60608315611dcd575081610ba0565b825115611ddd5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561186e578181015183820152602001611856565b828054828255906000526020600020908101928215611e79579160200282015b82811115611e7957825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611e44565b50611e85929150611f03565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611eca57805160ff1916838001178555611ef7565b82800160010185558215611ef7579182015b82811115611ef7578251825591602001919060010190611edc565b50611e85929150611f22565b5b80821115611e855780546001600160a01b0319168155600101611f04565b5b80821115611e855760008155600101611f2356fe42617365546f6b656e3a206d73672e73656e646572206e6f742077686974656c697374656442617365546f6b656e3a207472616e7366657220746f20746865207a65726f206164647265737342617365546f6b656e3a206d696e7420746f20746865207a65726f206164647265737342617365546f6b656e3a20617070726f766520746f20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c42617365546f6b656e3a20666f7262696464656e00000000000000000000000042617365546f6b656e3a20617070726f76652066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42617365546f6b656e3a205f6163636f756e7420616c7265616479206d61726b656442617365546f6b656e3a206275726e20616d6f756e7420657863656564732062616c616e63655361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656442617365546f6b656e3a206275726e2066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e736665722066726f6d20746865207a65726f2061646472657373a26469706673582212209be77a97bb7f5c2170facc4675ea5e2849eea806ee03a298cbc95613893a68f964736f6c634300060c003342617365546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class NOVA__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NOVA> {
    return super.deploy(overrides || {}) as Promise<NOVA>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NOVA {
    return super.attach(address) as NOVA;
  }
  connect(signer: Signer): NOVA__factory {
    return super.connect(signer) as NOVA__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NOVAInterface {
    return new utils.Interface(_abi) as NOVAInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NOVA {
    return new Contract(address, _abi, signerOrProvider) as NOVA;
  }
}
