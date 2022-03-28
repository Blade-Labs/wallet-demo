<script setup lang='ts'>
import { useProviderStore } from "@/store/blade-provider";
import { AccountId } from "@hashgraph/sdk";

const providerStore = useProviderStore();
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
  const result = await providerStore.provider!.getAccountInfo( accountId.value! );
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

    <text-box label="Transaction Id"
      v-model="transactionIdString" />

  </vue-form>
</template>
