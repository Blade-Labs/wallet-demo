<script setup lang='ts'>
import { useBladeStore } from "@/store/blade-signer";
import { AccountId } from "@hashgraph/sdk";

const bladeStore = useBladeStore();
const accountId = ref<AccountId|null>();

let _accountIdString:string = '';
const accountIdString = computed({

  get():string{
    return _accountIdString;
  },
  set(v:string){

    _accountIdString = v;
    try {

      accountId.value = AccountId.fromString(v);
    } catch (err){
      accountId.value = null;
    }

  }


});

const onSubmit = async ()=>{
  const result = await bladeStore.getAccountInfo( accountId.value! );
  return `Account Balance: ${result.balance} Owned Nfts: ${result.ownedNfts}`;
}

const canSubmit = computed(()=>{
  return accountId.value!=null;
});

</script>

<template>
<vue-form
  name="form_account_info"
  title="Get Account Info"
  :onSubmit="onSubmit"
  :canSubmit="canSubmit">

    <text-box label="Account Id"
      v-model="accountIdString" />

  </vue-form>
</template>
