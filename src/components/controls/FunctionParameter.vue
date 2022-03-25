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
    _myParam.value.paramType=v;

  }

});
const paramValue = computed({

  get(){
    return _myParam.value?.value ?? '';
  },
  set(v:any){
    _myParam.value.value = v;
  }

});

const inputType = computed(()=>{

  const val = paramType.value;
  if ( val == ParamType.bool) {
    return 'checkbox';
  } else if ( val == ParamType.str){
    return 'text';
  } else if ( val == ParamType.num){
    return 'number';
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

  <div class="flex flex-row">
    <input :type="inputType" v-model="paramValue">
    <select name="Param type" v-model="paramType">
      <option v-for="typeKey in paramTypes" :key="typeKey" :value="typeKey">
        {{ ParamType[typeKey]}}
      </option>
    </select>
    <action-button class="rounded-full"
      @click="onRemove">&minus;</action-button>
  </div>

</template>
