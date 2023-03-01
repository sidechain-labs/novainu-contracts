/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IRewardTrackerInterface extends ethers.utils.Interface {
  functions: {
    "averageStakedAmounts(address)": FunctionFragment;
    "claim(address)": FunctionFragment;
    "claimForAccount(address,address)": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "cumulativeRewards(address)": FunctionFragment;
    "depositBalances(address,address)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "stakeForAccount(address,address,address,uint256)": FunctionFragment;
    "stakedAmounts(address)": FunctionFragment;
    "tokensPerInterval()": FunctionFragment;
    "unstake(address,uint256)": FunctionFragment;
    "unstakeForAccount(address,address,uint256,address)": FunctionFragment;
    "updateRewards()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "averageStakedAmounts",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimForAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "claimable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositBalances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeForAccount",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensPerInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeForAccount",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewards",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "averageStakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakeForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewardTracker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRewardTrackerInterface;

  functions: {
    averageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claim(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositBalances(
      _account: string,
      _depositToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeForAccount(
      _fundingAccount: string,
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensPerInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    unstake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeForAccount(
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  averageStakedAmounts(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimForAccount(
    _account: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  cumulativeRewards(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositBalances(
    _account: string,
    _depositToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stake(
    _depositToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeForAccount(
    _fundingAccount: string,
    _account: string,
    _depositToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedAmounts(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

  unstake(
    _depositToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeForAccount(
    _account: string,
    _depositToken: string,
    _amount: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    averageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(_receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    cumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBalances(
      _account: string,
      _depositToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeForAccount(
      _fundingAccount: string,
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeForAccount(
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewards(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    averageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    cumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBalances(
      _account: string,
      _depositToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeForAccount(
      _fundingAccount: string,
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeForAccount(
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    averageStakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimForAccount(
      _account: string,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositBalances(
      _account: string,
      _depositToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeForAccount(
      _fundingAccount: string,
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedAmounts(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensPerInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      _depositToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeForAccount(
      _account: string,
      _depositToken: string,
      _amount: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
