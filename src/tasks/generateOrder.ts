


export function decodeOrder(bytes: string): Order {
  return {
    userId: BigNumber.from("0x" + bytes.substring(2, 18)),
    sellAmount: BigNumber.from("0x" + bytes.substring(43, 66)),
    buyAmount: BigNumber.from("0x" + bytes.substring(19, 42)),
  };
}

export function encodeOrder(order: Order): string {
  return (
    "0x" +
    order.userId.toHexString().slice(2).padStart(16, "0") +
    order.buyAmount.toHexString().slice(2).padStart(24, "0") +
    order.sellAmount.toHexString().slice(2).padStart(24, "0")
  );
}



console.log(
    encodeOrder({
      userId: BigNumber.from(5),
      buyAmount: BigNumber.from("6009720711781"),
      sellAmount: BigNumber.from("286062705880775640000"),
    })
  );