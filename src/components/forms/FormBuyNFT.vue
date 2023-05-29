<script setup lang='ts'>
import {AccountId} from "@hashgraph/sdk";
import {BigNumber} from "bignumber.js";
import {TokenToBuyNFTWith, useBladeStore} from '../../store/blade-signer';
import {toHexBytes} from '../../utils/encode';

const bladeStore = useBladeStore();
const nftId = ref<string>();
const nftSerial = ref<string>();
const token = ref<boolean>();
const amount = ref<BigNumber>();
const accountFrom = ref<AccountId|null>();

let _accountString:string = "";
const accountString = computed({
  get():string{
    return _accountString;
  },
  set(v:string){
    _accountString = v;

    try {
      accountFrom.value = AccountId.fromString(v);
    } catch (err){
      accountFrom.value = null;
    }
  }
});

const onSubmit = async ()=>{
  const result = await bladeStore.nftBuy({
    accountFrom: accountFrom.value as AccountId,
    tokenId: nftId.value as string,
    serial: parseInt(nftSerial.value || "0"),
    amount: amount.value!,
    tokenToBuyWith: token.value ? TokenToBuyNFTWith.USDC : TokenToBuyNFTWith.HBAR
  });
  const receipt = await bladeStore.getTransactionReceipt(result!.transactionId);

  return `Transaction id: ${result?.transactionId}\n`+
    `Transaction status: ${receipt.status}\n`+
    `Receipt bytes: ${ toHexBytes( receipt.toBytes() )}`
  ;
}

const canSubmit = computed(()=>{
  return Boolean(nftId?.value && nftSerial?.value && accountFrom?.value && amount?.value);
});

</script>

<template>
  <vue-form
    title="Buy NFT"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit"
  >
    <text-box label="NFT ID" v-model="nftId" />
    <text-box label="NFT Serial" v-model="nftSerial" />
    <text-box label="From Account" v-model="accountString" />
    <toggle-control label="Switch between HBAR and USDC" v-model="token"/>
    <token-amount-box
      :label="token ? 'USDC Amount' : 'HBAR Amount'"
      :decimals="8"
      v-model="amount"
    />
  </vue-form>
</template>
