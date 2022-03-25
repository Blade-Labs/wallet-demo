<script setup lang="ts">
import { FunctionParam, ParamType } from '../../model/contract';

const props = defineProps<{
  parameter:FunctionParam
}>();

const emit = defineEmits<{

  (e:'update:parameter', param:FunctionParam):void;
  (e:'remove', key:number):void;

}>();

const _myParam = ref<FunctionParam>( props.parameter);
const paramTypes = Object.keys( ParamType);

const paramType = computed({

  get():ParamType{
    return _myParam.value.paramType;
  },
  set(v:ParamType){
    if ( _myParam.value.paramType != v ) {
      _myParam.value.value=undefined;
    }
    _myParam.value.paramType=v;

  }

});
const paramValue = computed({

  get(){
    return _myParam.value?.value ?? '';
  },
  set(v:string){
    _myParam.value.value = v;
  }

});

const onParamChanged = ()=>{
  emit('update:parameter', _myParam.value);
}

const onRemove = ()=>{
  emit('remove', _myParam.value.key);
}

</script>



<template>

  <div class="flex flex-row justify-between items-center space-x-4">
    <div class="flex flex-row items-center flex-grow">
      <input class="flex-grow text-basePurple" type="text" v-model="paramValue">
      <select name="Param type" v-model="paramType"
      
        class="bg-basePurple ml-2 my-1">
        <option v-for="typeKey in paramTypes"
          :key="typeKey"
          :value="typeKey"
          :selected="typeKey==paramType">
          {{ ParamType[typeKey]}}
        </option>
      </select>
    </div>
    <circle-button
      @click="onRemove">&minus;
    </circle-button>
  </div>

</template>
