<script setup lang="ts">
import { FunctionParam, ParamType } from '../../model/contract';

const props = defineProps<{
  parameters:Array<FunctionParam>
}>();

let nextkey = 1;

const myParams = ref(props.parameters);
const addParam = ()=>{

  myParams.value.push( {
    key:nextkey++,
    value:null,
    paramType:ParamType.str
  });

}

const removeParam = (paramKey:number)=>{

  const index = myParams.value.findIndex( (v)=>v.key==paramKey);
  if ( index >= 0 ) {
    myParams.value.splice( index, 1);
  }


}

</script>

<template>
  <div>
    <div class="flex flex-row justify-between">
      <span>Function Parameters</span>
      <circle-button class="rounded-full w-8 h-8 min-w-5 min-h-5"
      @click="addParam">&plus;
    </circle-button>
    </div>

    <function-parameter v-for="p in parameters"
      :key="p.key"
      :parameter="p"
      @remove="removeParam" />

  </div>
</template>
