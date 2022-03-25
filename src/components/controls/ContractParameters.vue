<script setup lang="ts">
import { ContractFunctionParameters } from "@hashgraph/sdk";
import { FunctionParam, ParamType } from '../../model/contract';

const props = defineProps<{
  parameters:Array<FunctionParam>
}>();

let nextkey = 1;

const addParam = ()=>{

  props.parameters.push( {
    key:nextkey++,
    value:null,
    type:ParamType.str
  });

}

const removeParam = (funcParam:FunctionParam)=>{

  const index = props.parameters.findIndex( (v)=>v.key==funcParam.key);
  if ( index >= 0 ) {
    props.parameters.splice( index, 1);
  }


}

</script>

<template>
  <div>
    <action-button class="rounded-full"
      @click="addParam">&plus;</action-button>

    <function-parameter v-for="p in parameters" :key="p.key"
      @remove="removeParam" />

  </div>
</template>
