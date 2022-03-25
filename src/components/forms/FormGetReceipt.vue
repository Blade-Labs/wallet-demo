<script setup lang='ts'>
import { useProviderStore } from "@/store/blade-provider";
import { TransactionId } from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";

const providerStore = useProviderStore();
const amount = ref<BigNumber>();
const transactionId = ref<TransactionId|null>();

let _transactionIdString:string = '';
const transactionIdString = computed({

  get():string{
    return _transactionIdString;
  },
  set(v:string){

    _transactionIdString = v;
    try {

      transactionId.value = TransactionId.fromString(v);
    } catch (err){
      transactionId.value = null;
    }

  }


});

const onSubmit = async ()=>{

  await providerStore.provider!.getTransactionReceipt( transactionId.value! );

}

const canSubmit = computed(()=>{
  return amount.value != null &&
          amount.value.gt(0) &&
          transactionId.value!=null;
});

</script>

<template>
<vue-form
  :name="form_send_hbar"
  :onSubmit="onSubmit"
  :canSubmit="canSubmit">

  <div>
    <text-box label="Transaction Id"
      v-model="transactionIdString" />
    <submit-button form="form_send_hbar"
      :busy="busy" 
      :disabled="!canSubmit">Submit</submit-button>
  </div>
  
  </vue-form>
</template>
