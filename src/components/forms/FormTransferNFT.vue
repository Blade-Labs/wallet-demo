<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { useBladeStore } from '../../store/blade-signer';
import { toHexBytes } from '../../utils/encode';

const bladeStore = useBladeStore();
const nftId = ref<string>();
const nftSerial = ref<string>();
const toAccount = ref<AccountId|null>();

let _accountString:string = "";
const accountString = computed({
  get():string{
    return _accountString;
  },
  set(v:string){
    _accountString = v;

    try {
      toAccount.value = AccountId.fromString(v);
    } catch (err){
      toAccount.value = null;
    }
  }
});

const onSubmit = async ()=>{
  const result = await bladeStore.nftTransfer({
    sender: bladeStore.accountId as AccountId,
    recipient: toAccount.value as AccountId,
    tokenId: nftId.value as string,
    serial: parseInt(nftSerial.value || "0")
  });
  const receipt = await bladeStore.getTransactionReceipt(result!.transactionId);

  return `Transaction id: ${result?.transactionId}\n`+
    `Transaction status: ${receipt.status}\n`+
    `Receipt bytes: ${ toHexBytes( receipt.toBytes() )}`
  ;
}

const canSubmit = computed(()=>{
  return Boolean(nftId?.value && nftSerial?.value && toAccount?.value);
});

</script>

<template>
  <vue-form
    title="Transfer NFT"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit"
  >
    <text-box label="NFT ID" v-model="nftId" />
    <text-box label="NFT Serial" v-model="nftSerial" />
    <text-box label="To Account" v-model="accountString" />
  </vue-form>
</template>
