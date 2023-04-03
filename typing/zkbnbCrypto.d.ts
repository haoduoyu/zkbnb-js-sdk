declare module '@bnb-chain/zkbnb-js-sdk/zkCrypto' {
  interface ZK_CRYPTO_TPYE {
    cleanPackedAmount: (amount: string) => string;
    cleanPackedFee: (amount: string) => string;
    getEddsaPublicKey: (seed: string) => string;
    generateEddsaKey: (seed: string) => string;
    getEddsaCompressedPublicKey: (seed: string) => string;
    eddsaSign: (seed: string, message: string) => string;
    eddsaVerify: (publicKey: string, signature: string, message: string) => string;
    signAddLiquidity: (seed: string, segmentstr: string) => string;
    signRemoveLiquidity: (seed: string, segmentstr: string) => string;
    signSwap: (seed: string, segmentstr: string) => string;
    signTransfer: (seed: string, segmentstr: string) => string;
    signWithdraw: (seed: string, segmentstr: string) => string;
    signOffer: (seed: string, segmentstr: string) => string;
    signAtomicMatch: (seed: string, segmentstr: string) => string;
    signCancelOffer: (seed: string, segmentstr: string) => string;
    signCreateCollection: (seed: string, segmentstr: string) => string;
    signMintNft: (seed: string, segmentstr: string) => string;
    signTransferNft: (seed: string, segmentstr: string) => string;
    signWithdrawNft: (seed: string, segmentstr: string) => string;
    signChangePubKey: (seed: string, segmentstr: string) => string;
  }

  export const ZkCrypto: ZK_CRYPTO_TPYE;
}
