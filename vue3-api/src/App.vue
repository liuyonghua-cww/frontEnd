<template>
    <div>
        <list v-for="(item, index) of data"
              :key="index"
              :data="item"
              @remove="remove"
        ></list>
       <!-- <return-render-function/>-->
    </div>
    <hr>
    <refs-reactive/>
    <hr>
    <proxy-test/>
    <hr>
    <computed/>

</template>

<script>
import {
    ref,
    onMounted,
    onBeforeMount,
    getCurrentInstance,
    reactive
} from "vue";
import List from './components/List';
import ReturnRenderFunction from "@/components/returnRenderFunction";
import RefsReactive from './components/refs-reactive'
import ProxyTest from './components/Proxy-test'
import Computed from './components/Computed'

const _data = [ { value: 'lucy', id: 1 }, { value: 'jack', id: 2 } ];
const _remove = (data, id) => {
    return data.filter(item => item.id !== id);
};
export default {
    name: 'App',
    components: {
        List,
        ReturnRenderFunction,
        RefsReactive,
        ProxyTest,
        Computed
    },

    setup(props, ctx) {
        const instance = getCurrentInstance();
        console.log(instance.appContext.config.globalProperties);

        const data = ref(_data);
        // console.log(data);

        // console.log('setup');
        onBeforeMount(() => {
            // console.log('beforeMount');
        });
        onMounted(() => {
            // console.log('mounted');
        });

        const remove = (id) => {
            data.value = _remove(data.value, id);
        };


        return {
            data,
            remove
        };
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
