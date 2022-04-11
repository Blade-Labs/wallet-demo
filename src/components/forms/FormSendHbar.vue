<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";
import { useBladeStore } from '../../store/blade-signer';
import { toHexBytes } from '../../utils/encode';

const bladeStore = useBladeStore();
const amount = ref<BigNumber>();
const toAccount = ref<AccountId|null>();

let _accountString:string = '';
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

  
    const result = await bladeStore.sendTransfer(
      {accountId:toAccount.value!, amount:amount.value!});

    const receipt = await bladeStore.getTransactionReceipt(result!.transactionId);
    //resultMessage.value = `Transaction receipt: ${receipt.scheduleId}`;

    return `Transaction id: ${result?.transactionId}\n`+
    `Transaction status: ${receipt.status}\n`+
    `Receipt bytes: ${ toHexBytes( receipt.toBytes() )}`;

}

const canSubmit = computed(()=>{
  return amount.value != null &&
          amount.value.gt(0) &&
          toAccount.value!=null;
});

</script>

<template>
<vue-form
    title="Send Transaction"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit">


    <text-box label="To Account"
      v-model="accountString" />
    <token-amount-box
      label="Hbar Amount"
      :decimals="8"
      v-model="amount"
    />


</vue-form>
</template>
