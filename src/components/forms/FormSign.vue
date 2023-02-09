<script setup lang='ts'>
import { useBladeStore } from "@/store/blade-signer";
import { toHexBytes } from "@/utils/encode";
import {SignerSignature} from "@hashgraph/sdk/lib/Signer";
import {Buffer} from "buffer";
import ToggleControl from "@/components/controls/ToggleControl.vue";
const message = ref<Uint8Array>();
const canonical = ref<boolean>(false);


let _stringToSign: string = '';
const stringToSign = computed({
  get(): string {
    return _stringToSign;
  },
  set(v: string) {
    _stringToSign = v;
    try {
      message.value = Buffer.from(v.slice(2), "hex");
    } catch (err) {
      message.value = undefined;
    }
  }
});
const onSubmit = async () => {
  const result = await useBladeStore().signMessages([message.value!], canonical.value);
  const signatures = result?.map((signature: SignerSignature) => toHexBytes(signature.signature));

  return `Signing result:  ${signatures?.join(", ")}`;
}


const canSubmit = computed(() => message.value != null);

</script>

<template>
  <vue-form
    title="Sign Message"
    name="form_sign"
    :onSubmit="onSubmit"
    :canSubmit="canSubmit">

    <text-box label="Message to sign"
              v-model="stringToSign"/>
    <toggle-control label="Using Heathers.js"
              v-model="canonical"/>
  </vue-form>
</template>
