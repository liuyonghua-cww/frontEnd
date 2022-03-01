<template>
    <div>子组件：<input type="text" :value="prop.number" @input="changeNumber"></div>
</template>

<script setup>
import { defineProps } from "vue";

const prop = defineProps({
    number: Number
})
const emits = defineEmits(['update:number'])
const changeNumber = (e) => {
  emits('update:number', +e.target.value)
}

</script>

<style scoped>

</style>
