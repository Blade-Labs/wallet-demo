<script setup lang='ts'>
import { AccountId } from "@hashgraph/sdk";
import { useBladeStore } from '../../store/blade-signer';
import { toHexBytes } from '../../utils/encode';

const bladeStore = useBladeStore();
const tokenId = ref<string>();

const onSubmit = async ()=>{
  const result = await bladeStore.tokenAssociate({
    recipient: bladeStore.accountId as AccountId,
    tokenId: tokenId.value as string,
  });
  const receipt = await bladeStore.getTransactionReceipt(result!.transactionId);

  return `Transaction id: ${result?.transactionId}\n`+
    `Transaction status: ${receipt.status}\n`+
    `Receipt bytes: ${ toHexBytes( receipt.toBytes() )}`
  ;
}

const canSubmit = computed(()=>{
  return Boolean(tokenId?.value);
});

</script>

<template>
  <vue-form
    title="Associate Token"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit"
  >
    <text-box label="Token ID" v-model="tokenId" />
  </vue-form>
</template>
