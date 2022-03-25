<script setup lang="ts">
import { FunctionParam, ParamType } from '../../model/contract';

const props = defineProps<{
  modelValue:FunctionParam
}>();

const emit = defineEmits<{

  (e:'update:modelValue', param:FunctionParam):void;
  (e:'remove', key:number):void;

}>();

const _myParam = ref<FunctionParam>( props.modelValue);
const paramTypes = Object.keys( ParamType);

const paramType = computed({

  get(){
    return _myParam.value.type;
  },
  set(v:ParamType){
    _myParam.value.type=v;
    onParamChanged();
  }

});
const paramValue = computed({

  get(){
    return _myParam.value.value;
  },
  set(v:any){
    _myParam.value.value = v;
    onParamChanged();
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
  emit('update:modelValue', _myParam.value);
}

const onRemove = ()=>{
  emit('remove', _myParam.value.key);
}

</script>



<template>

  <div class="flex flex-row">
    <input :type="inputType">
    <select name="Param type" v-model="paramType">
      <option v-for="typeKey in paramTypes" :key="typeKey" :value="type">
        {{ ParamType[typeKey]}}
      </option>
    </select>
    <action-button class="rounded-full"
      @click="onRemove">&minus;</action-button>
  </div>

</template>
