/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class EasyAuction extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): EasyAuction;
  methods: {
    auctionCounter(): TransactionObject<string>;

    auctionData(
      arg0: number | string
    ): TransactionObject<{
      sellToken: string;
      buyToken: string;
      auctionEndDate: string;
      sellOrder: string;
      clearingPriceOrder: string;
      volumeClearingPriceOrder: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    buyOrders(arg0: number | string): TransactionObject<string>;

    donationAccount(): TransactionObject<string>;

    numUsers(): TransactionObject<string>;

    initiateAuction(
      _sellToken: string,
      _buyToken: string,
      duration: number | string,
      _sellAmount: number | string,
      _buyAmount: number | string
    ): TransactionObject<string>;

    placeBuyOrders(
      auctionId: number | string,
      _buyAmount: (number | string)[],
      _sellAmount: (number | string)[],
      _prevBuyOrders: (string | number[])[]
    ): TransactionObject<void>;

    calculatePrice(
      auctionId: number | string
    ): TransactionObject<{
      priceNumerator: string;
      priceDenominator: string;
      0: string;
      1: string;
    }>;

    claimFromBuyOrder(
      auctionId: number | string,
      orders: (string | number[])[]
    ): TransactionObject<{
      sumSellToken: string;
      sumBuyToken: string;
      0: string;
      1: string;
    }>;

    claimFromSellOrder(
      auctionId: number | string
    ): TransactionObject<{
      sumSellToken: string;
      sumBuyToken: string;
      0: string;
      1: string;
    }>;

    registerUser(user: string): TransactionObject<string>;

    getUserId(user: string): TransactionObject<string>;

    getSecondsRemainingInBatch(
      auctionId: number | string
    ): TransactionObject<string>;
  };
  events: {
    NewAuction: ContractEvent<{
      auctionId: string;
      _sellToken: string;
      _buyToken: string;
      0: string;
      1: string;
      2: string;
    }>;
    NewBuyOrders: ContractEvent<{
      auctionId: string;
      userId: string;
      sellAmountOfBuy: string[];
      buyAmountOfBuy: string[];
      0: string;
      1: string;
      2: string[];
      3: string[];
    }>;
    UserRegistration: ContractEvent<{
      user: string;
      userId: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
