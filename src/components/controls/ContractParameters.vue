<script setup lang="ts">
import { FunctionParam, ParamType } from '../../model/contract';

const props = defineProps<{
  parameters:Array<FunctionParam>
}>();

let nextkey = 1;

const addParam = ()=>{

  props.parameters.push( {
    key:nextkey++,
    value:null,
    paramType:ParamType.str
  });

}

const removeParam = (paramKey:number)=>{

  const index = props.parameters.findIndex( (v)=>v.key==paramKey);
  if ( index >= 0 ) {
    props.parameters.splice( index, 1);
  }


}

</script>

<template>
  <div>
    <action-button class="rounded-full w-8 h-8"
      @click="addParam">&plus;</action-button>

    
    <function-parameter v-for="p in parameters"
      :key="p.key"
      :parameter="p"
      @remove="removeParam" />

  </div>
</template>
