<script setup lang="ts">
import { AccountId } from '@hashgraph/sdk';

const emit = defineEmits<{

  (e: 'update:accountId', id: AccountId): void

}>();

const props = defineProps({

  accountId: { type: AccountId, default: null },

});



// Control for entering hedera account ids.
const idString = ref<string>(

);

const onChanged = (e: Event) => {

  const newValue = (<HTMLInputElement>e.target).value;
  try {

    const newId = AccountId.fromString(newValue);

    emit("update:accountId", newId);

  } catch (err) {
  }

}

</script>


<template>
  <label class="font-medium text-sm mb-1.5 mt-5">Account Id:</label>
  <div class="margin">
    <input
      :value="idString"
      @change="onChanged"
      name="accountId"
      type="text"
      class="rounded outline-none border-aquarellePurple focus:border-lynxScreenBlue focus:ring-lynxScreenBlue"
    />
  </div>
</template>
