<script setup lang='ts'>
import { AccountId, ContractExecuteTransaction,
        ContractId, ContractFunctionParameters,
        Hbar, HbarUnit} from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";

const amount = ref<BigNumber>();
const contractId = ref<ContractId|null>();

/**
 * Function to call on contract.
 */
const functionName = ref<string>();

let _contractIdString:string = '';
const contractIdString = computed({

  get():string{
    return _contractIdString;
  },
  set(v:string){

    _contractIdString = v;
    try {

      contractId.value = ContractId.fromString(v);
    } catch (err){
      contractId.value = null;
    }

  }


});
const onSubmit = async ()=>{

      new ContractExecuteTransaction({
        amount:Hbar.from(13, HbarUnit.Hbar),
        contractId:contractId.value!,
        function:new ContractFunctionParameters(),
        gas:20000,
      }).setNodeAccountIds([AccountId.fromString('0.0.3')])
}

const canSubmit = computed(()=>{
  return amount.value != null &&
          amount.value.gt(0) &&
          contractId.value!=null;
});

</script>

<template>
  <vue-form
    title="Call Contract Function"
    name="form_call_contract"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit">

    <div>
      <text-box label="Contact Id"
        v-model="contractIdString" />
      <text-box label="Contact Function"
        v-model="functionName" />
      <token-amount-box
        label="Hbar Amount"
        decimals="8"
        v-model="amount"
      />

  </div>

  </vue-form>
</template>
