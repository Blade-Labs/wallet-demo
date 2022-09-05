<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { useBladeStore } from '../../store/blade-signer';
import { toHexBytes } from '../../utils/encode';

const bladeStore = useBladeStore();
const tokenId = ref<string>();
const amount = ref<number>();
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
  const result = await bladeStore.tokenTransfer({
    accountId: accountFrom.value as AccountId,
    tokenId: tokenId.value as string,
    amount: amount.value!,
  });
  const receipt = await bladeStore.getTransactionReceipt(result!.transactionId);

  return `Transaction id: ${result?.transactionId}\n`+
    `Transaction status: ${receipt.status}\n`+
    `Receipt bytes: ${ toHexBytes( receipt.toBytes() )}`
  ;
}

const canSubmit = computed(()=>{
  return Boolean(tokenId?.value && accountFrom?.value && amount?.value);
});

</script>

<template>
  <vue-form
    title="Send Token Transaction"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit"
  >
    <text-box label="Token ID" v-model="tokenId" />
    <text-box label="From Account" v-model="accountString" />
    <token-amount-box
      label="Token Amount"
      :decimals="8"
      v-model="amount"
    />
  </vue-form>
</template>
