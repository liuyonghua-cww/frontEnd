<template>
    <h1>v-model</h1>
    父组件：{{ value }}
    <!--<child :number="value" @update:number="value = $event"/>-->
    <child v-model:number="value" @update:number="monitorValue"/>
</template>

<script setup>
import { ref } from "vue";
import Child from "./child";

const value = ref(1)
const monitorValue = () => {
    console.log('value值改变了' + value.value);
};

</script>

<style scoped>

</style>
