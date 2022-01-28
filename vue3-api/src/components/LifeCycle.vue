<template>
    <h1>LifeCycle</h1>
    <span>{{ count }}</span>
    <br>
    <button @click="count++">count++</button>
</template>

<script>
import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from "vue";

export default {
    name: "LifeCycle",
    components: {},
    props: {},
    setup() {
        console.log('setup');
        const count = ref(0);
        // 组合式api的形式使用生命周期函数
        onBeforeMount(() => {
            console.log('beforeMount');
        });
        onMounted(() => {
            console.log('mounted');
        });
        onBeforeUpdate(() => {
            console.log('beforeUpdate');
        });
        onUpdated(() => {
            console.log('updated');
        });
        onBeforeUnmount(() => {
            console.log('beforeUnmount');
        });
        onUnmounted(() => {
            console.log('unmounted');
        })
        return {
            count
        };
    },
    // 配置项的形式使用 生命周期函数
    /* beforeCreate() {
         console.log('beforeCreate');
     },
     created() {
         console.log('created');
     },
     beforeMount() {
         console.log('beforeMount');
     },
     mounted() {
         console.log('mounted');
     },
     beforeUpdate() {
         console.log('beforeUpdate');
     },
     updated() {
         console.log('updated');
     },
     beforeUnmount() {
         console.log('beforeUnmount');
     },
     unmounted() {
         console.log('unmounted');
     }*/
};
</script>

<style scoped>

</style>
