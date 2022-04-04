<script setup lang='ts'>
import { useBladeStore } from "@/store/blade-connect";
import { toHexBytes } from "@/utils/encode";
import { TransactionId } from "@hashgraph/sdk";

const bladeStore = useBladeStore();
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
      console.log(`invalid transaction id: ${err}`);
      transactionId.value = null;
    }

  }


});

const onSubmit = async ()=>{
  const result = await bladeStore.wallet!.getProvider().getTransactionReceipt( transactionId.value! );
  return `Receipt bytes: ${toHexBytes( result.toBytes() )}`;
}

const canSubmit = computed(()=>{
  return transactionId.value!=null;
});

</script>

<template>
<vue-form
  name="form_get_receipt"
  title="Get Transaction Receipt"
  :onSubmit="onSubmit"
  :canSubmit="canSubmit">

    <text-box label="Transaction Id"
      v-model="transactionIdString" />

  </vue-form>
</template>
