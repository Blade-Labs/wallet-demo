<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";

const props = defineProps<{

  busy?:boolean

}>();

const amount = ref<BigNumber>();
const toAccount = ref<AccountId|null>();

const emit = defineEmits<{

  (e:'submit', transfer:{amount:BigNumber, accountId:AccountId}):void

}>();

let _contractId:string = '';
const contractId = computed({

  get():string{
    return _contractId;
  },
  set(v:string){

    _contractId = v;
    try {

      toAccount.value = AccountId.fromString(v);
    } catch (err){
      toAccount.value = null;
    }

  }


});
const onSubmit = async ()=>{
  emit('submit', {
    accountId:toAccount.value!,
    amount:amount.value!
  });
}

const canSubmit = computed(()=>{
  return amount.value != null &&
          amount.value.gt(0) &&
          toAccount.value!=null;
});

</script>

<template>
  <vue-form id="form_call_contract" @submit.prevent="onSubmit">

    <div>
      <text-box label="Contact Id"
        v-model="contractId" />
      <token-amount-box
        label="Hbar Amount"
        decimals="8"
        v-model="amount"
      />
      <submit-button form="form_send_hbar"
        :busy="busy" 
        :disabled="!canSubmit">Submit</submit-button>

  </div>
  </vue-form>
</template>
