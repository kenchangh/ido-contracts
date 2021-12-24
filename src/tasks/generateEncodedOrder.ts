import {encodeOrder} from '../priceCalculation'
import { task } from "hardhat/config";
import { BigNumber } from '@ethersproject/units/node_modules/@ethersproject/bignumber';

const generateEncodedOrder: () => void = () => {
  task("generateEncodedOrder", "Generates the encoded order to be used to claim from order")
    .addParam("userId", "ID of the auction user")
    .addParam("sellAmount", "The amount of bidding tokens to provide")
    .addParam(
      "buyAmount",
      "The amount of auctioning tokens to receive at least",
    )
    .setAction(async (taskArgs) => {
      const {userId, sellAmount,buyAmount} = taskArgs
      console.log(encodeOrder({
        userId: BigNumber.from(userId),
        sellAmount: BigNumber.from(sellAmount),
        buyAmount: BigNumber.from(buyAmount)
      }))
    })
}
export { generateEncodedOrder };
