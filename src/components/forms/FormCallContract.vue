<script setup lang='ts'>
import { useBladeStore } from "@/store/blade-signer";
import { toHexBytes } from "@/utils/encode";
import { AccountId, ContractExecuteTransaction,
        ContractId, ContractFunctionParameters,
        Hbar, HbarUnit} from "@hashgraph/sdk";
import { BigNumber } from "bignumber.js";
import { FunctionParam, ParamType } from '../../model/contract';

const amount = ref<BigNumber>( new BigNumber(0));
const contractId = ref<ContractId|null>();

/**
 * Function to call on contract.
 */
const functionName = ref<string>();
const functionParams = ref<Array<FunctionParam>>( []);

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

  const tx =
      new ContractExecuteTransaction({
        amount:Hbar.from(amount.value! as BigNumber, HbarUnit.Hbar),
        contractId:contractId.value!,

        gas:20000,
      });

    if ( functionName.value != null && functionName.value != '' ) {
      tx.setFunction( functionName.value!, buildParams() );
    }

    tx.setNodeAccountIds([AccountId.fromString('0.0.3')]);

  const result = await useBladeStore().call( tx );
  const receipt = await useBladeStore().getTransactionReceipt(result.transactionId );

  return `Contract receipt bytes:  ${toHexBytes(receipt.toBytes())}`;
}

/**
 * Build actual function parameters from mode objects.
 */
const buildParams = ()=>{

  const funcParams = functionParams.value;
  if ( !funcParams || funcParams.length == 0 ){
    return undefined;
  }

  const contractParams = new ContractFunctionParameters();
  for( let i = 0; i < funcParams.length; i++) {

    const param = funcParams[i];

    if ( param.paramType == ParamType.num) {
      const num = parseInt( param.value! );
      contractParams.addInt32( num );
    } else if ( param.paramType == ParamType.str) {
      contractParams.addString( param.value as string );
    } else if ( param.paramType == ParamType.bool){
      contractParams.addBool(param.value?.toLowerCase() === 'true');
    }
  }

  return contractParams;

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

      <text-box label="Contract Id"
        v-model="contractIdString" />
      <text-box label="Function Name"
        v-model="functionName" />
      <contract-parameters :parameters="functionParams" />
      <token-amount-box
        label="Hbar Amount"
        :decimals="8"
        v-model="amount"
      />


  </vue-form>
</template>
