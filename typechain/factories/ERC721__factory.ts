/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [],
    name: "baseURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e3c38038062001e3c833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250620001b391506301ffc9a760e01b90506200021d565b8151620001c8906006906020850190620002a2565b508051620001de906007906020840190620002a2565b50620001f16380ac58cd60e01b6200021d565b62000203635b5e139f60e01b6200021d565b6200021563780e9d6360e01b6200021d565b50506200033e565b6001600160e01b031980821614156200027d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002e557805160ff191683800117855562000315565b8280016001018555821562000315579182015b8281111562000315578251825591602001919060010190620002f8565b506200032392915062000327565b5090565b5b8082111562000323576000815560010162000328565b611aee806200034e6000396000f3fe608060405234801561001057600080fd5b50600436106100e65760003560e01c806301ffc9a7146100eb57806306fdde0314610126578063081812fc146101a3578063095ea7b3146101dc57806318160ddd1461020a57806323b872dd146102245780632f745c591461025a57806340c10f191461028657806342842e0e146102b25780634f6ccce7146102e85780636352211e146103055780636c0360eb1461032257806370a082311461032a57806395d89b4114610350578063a22cb46514610358578063b88d4fde14610386578063c87b56dd1461044a578063e985e9c514610467575b600080fd5b6101126004803603602081101561010157600080fd5b50356001600160e01b031916610495565b604080519115158252519081900360200190f35b61012e6104b8565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610168578181015183820152602001610150565b50505050905090810190601f1680156101955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c0600480360360208110156101b957600080fd5b503561054e565b604080516001600160a01b039092168252519081900360200190f35b610208600480360360408110156101f257600080fd5b506001600160a01b0381351690602001356105b0565b005b61021261068b565b60408051918252519081900360200190f35b6102086004803603606081101561023a57600080fd5b506001600160a01b0381358116916020810135909116906040013561069c565b6102126004803603604081101561027057600080fd5b506001600160a01b0381351690602001356106f3565b6102086004803603604081101561029c57600080fd5b506001600160a01b03813516906020013561071e565b610208600480360360608110156102c857600080fd5b506001600160a01b0381358116916020810135909116906040013561072c565b610212600480360360208110156102fe57600080fd5b5035610747565b6101c06004803603602081101561031b57600080fd5b503561075d565b61012e610785565b6102126004803603602081101561034057600080fd5b50356001600160a01b03166107e6565b61012e61084e565b6102086004803603604081101561036e57600080fd5b506001600160a01b03813516906020013515156108af565b6102086004803603608081101561039c57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156103d657600080fd5b8201836020820111156103e857600080fd5b803590602001918460018302840111600160201b8311171561040957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109b0945050505050565b61012e6004803603602081101561046057600080fd5b5035610a0e565b6101126004803603604081101561047d57600080fd5b506001600160a01b0381358116916020013516610cb5565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b5050505050905090565b600061055982610ce3565b6105945760405162461bcd60e51b815260040180806020018281038252602c8152602001806119c3602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105bb8261075d565b9050806001600160a01b0316836001600160a01b0316141561060e5760405162461bcd60e51b8152600401808060200182810382526021815260200180611a676021913960400191505060405180910390fd5b806001600160a01b0316610620610cf0565b6001600160a01b0316148061064157506106418161063c610cf0565b610cb5565b61067c5760405162461bcd60e51b81526004018080602001828103825260388152602001806119166038913960400191505060405180910390fd5b6106868383610cf4565b505050565b60006106976002610d62565b905090565b6106ad6106a7610cf0565b82610d6d565b6106e85760405162461bcd60e51b8152600401808060200182810382526031815260200180611a886031913960400191505060405180910390fd5b610686838383610e11565b6001600160a01b03821660009081526001602052604081206107159083610f4b565b90505b92915050565b6107288282610f57565b5050565b610686838383604051806020016040528060008152506109b0565b600080610755600284611072565b509392505050565b600061071882604051806060016040528060298152602001611978602991396002919061108e565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105445780601f1061051957610100808354040283529160200191610544565b60006001600160a01b03821661082d5760405162461bcd60e51b815260040180806020018281038252602a81526020018061194e602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061071890610d62565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105445780601f1061051957610100808354040283529160200191610544565b6108b7610cf0565b6001600160a01b0316826001600160a01b03161415610919576040805162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015290519081900360640190fd5b8060056000610926610cf0565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561096a610cf0565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6109c16109bb610cf0565b83610d6d565b6109fc5760405162461bcd60e51b8152600401808060200182810382526031815260200180611a886031913960400191505060405180910390fd5b610a08848484846110a5565b50505050565b6060610a1982610ce3565b610a545760405162461bcd60e51b815260040180806020018281038252602f815260200180611a18602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610ae95780601f10610abe57610100808354040283529160200191610ae9565b820191906000526020600020905b815481529060010190602001808311610acc57829003601f168201915b505060095493945050505060026000196101006001841615020190911604610b125790506104b3565b805115610be3576009816040516020018083805460018160011615610100020316600290048015610b7a5780601f10610b58576101008083540402835291820191610b7a565b820191906000526020600020905b815481529060010190602001808311610b66575b5050825160208401908083835b60208310610ba65780518252601f199092019160209182019101610b87565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150506104b3565b6009610bee846110f7565b6040516020018083805460018160011615610100020316600290048015610c4c5780601f10610c2a576101008083540402835291820191610c4c565b820191906000526020600020905b815481529060010190602001808311610c38575b5050825160208401908083835b60208310610c785780518252601f199092019160209182019101610c59565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006107186002836111d1565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d298261075d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610718826111dd565b6000610d7882610ce3565b610db35760405162461bcd60e51b815260040180806020018281038252602c8152602001806118ea602c913960400191505060405180910390fd5b6000610dbe8361075d565b9050806001600160a01b0316846001600160a01b03161480610df95750836001600160a01b0316610dee8461054e565b6001600160a01b0316145b80610e095750610e098185610cb5565b949350505050565b826001600160a01b0316610e248261075d565b6001600160a01b031614610e695760405162461bcd60e51b81526004018080602001828103825260298152602001806119ef6029913960400191505060405180910390fd5b6001600160a01b038216610eae5760405162461bcd60e51b81526004018080602001828103825260248152602001806118c66024913960400191505060405180910390fd5b610eb9838383610686565b610ec4600082610cf4565b6001600160a01b0383166000908152600160205260409020610ee690826111e1565b506001600160a01b0382166000908152600160205260409020610f0990826111ed565b50610f16600282846111f9565b5080826001600160a01b0316846001600160a01b0316600080516020611a4783398151915260405160405180910390a4505050565b6000610715838361120f565b6001600160a01b038216610fb2576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b610fbb81610ce3565b1561100c576040805162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015290519081900360640190fd5b61101860008383610686565b6001600160a01b038216600090815260016020526040902061103a90826111ed565b50611047600282846111f9565b5060405181906001600160a01b03841690600090600080516020611a47833981519152908290a45050565b60008080806110818686611273565b9097909650945050505050565b600061109b8484846112ee565b90505b9392505050565b6110b0848484610e11565b6110bc848484846113b8565b610a085760405162461bcd60e51b81526004018080602001828103825260328152602001806118946032913960400191505060405180910390fd5b60608161111c57506040805180820190915260018152600360fc1b60208201526104b3565b8160005b811561113457600101600a82049150611120565b6060816001600160401b038111801561114c57600080fd5b506040519080825280601f01601f191660200182016040528015611177576020820181803683370190505b50859350905060001982015b83156111c857600a840660300160f81b828280600190039350815181106111a657fe5b60200101906001600160f81b031916908160001a905350600a84049350611183565b50949350505050565b60006107158383611520565b5490565b60006107158383611538565b600061071583836115fe565b600061109b84846001600160a01b038516611648565b815460009082106112515760405162461bcd60e51b81526004018080602001828103825260228152602001806118726022913960400191505060405180910390fd5b82600001828154811061126057fe5b9060005260206000200154905092915050565b8154600090819083106112b75760405162461bcd60e51b81526004018080602001828103825260228152602001806119a16022913960400191505060405180910390fd5b60008460000184815481106112c857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816113895760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561134e578181015183820152602001611336565b50505050905090810190601f16801561137b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061139c57fe5b9060005260206000209060020201600101549150509392505050565b60006113cc846001600160a01b03166116df565b6113d857506001610e09565b60606114e6630a85bd0160e11b6113ed610cf0565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561145457818101518382015260200161143c565b50505050905090810190601f1680156114815780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611894603291396001600160a01b03881691906116e5565b905060008180602001905160208110156114ff57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b600081815260018301602052604081205480156115f4578354600019808301919081019060009087908390811061156b57fe5b906000526020600020015490508087600001848154811061158857fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806115b857fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610718565b6000915050610718565b600061160a8383611520565b61164057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610718565b506000610718565b6000828152600184016020526040812054806116ad57505060408051808201825283815260208082018481528654600181810189556000898152848120955160029093029095019182559151908201558654868452818801909252929091205561109e565b828560000160018303815481106116c057fe5b906000526020600020906002020160010181905550600091505061109e565b3b151590565b606061109b8484600085856116f9856116df565b61174a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117895780518252601f19909201916020918201910161176a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146117eb576040519150601f19603f3d011682016040523d82523d6000602084013e6117f0565b606091505b509150915061180082828661180b565b979650505050505050565b6060831561181a57508161109e565b82511561182a5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561134e57818101518382015260200161133656fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656eddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212209c329a08ac268d1c851b6d60b8f00f89e2484e49512e4b802ecc3ca8cf1904f364736f6c634300060c0033";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
