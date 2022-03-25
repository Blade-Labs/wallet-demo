<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";
import { useProviderStore } from '../../store/blade-provider';

const providerStore = useProviderStore();
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

  const result = await providerStore.sendTransfer(
    {accountId:toAccount.value!, amount:amount.value!});

  console.log(`transfer complete...`);

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
    :name="form_send_hbar"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit">

  <div>
    <text-box label="To Account"
      v-model="accountString" />
    <token-amount-box
      label="Hbar Amount"
      decimals="8"
      v-model="amount"
    />
  </div>

</vue-form>
</template>
