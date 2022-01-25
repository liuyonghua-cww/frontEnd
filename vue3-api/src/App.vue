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

const _data = [ { value: 'lucy', id: 1 }, { value: 'jack', id: 2 } ];
const _remove = (data, id) => {
    return data.filter(item => item.id !== id);
};
export default {
    name: 'App',
    components: {
        List,
        ReturnRenderFunction,
        RefsReactive
    },

    setup(props, ctx) {
        const instance = getCurrentInstance();
        console.log(instance.appContext.config.globalProperties);
        /*
        * ref 处理基本数据类型时响应式依靠的是 Object.defineProperty 的 get 与 set 完成
        * 处理对象类型的数据时，在内部求助了 Vue3 的一个新函数————reactive函数，底层依赖的是ES6的proxy 对象
        * */
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
    margin-top: 60px;
}
</style>
