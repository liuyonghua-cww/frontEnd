<template>
    <h1>App template</h1>
    <div>provide————车辆信息：{{carInfo.name}}---{{carInfo.price}}</div>
    <!--<div>
        <list v-for="(item, index) of data"
              :key="index"
              :data="item"
              @remove="remove"
        ></list>
       &lt;!&ndash; <return-render-function/>&ndash;&gt;
    </div>-->
    <hr>
    <refs-reactive/>
    <hr>
    <proxy-test/>
    <hr>
    <computed/>
    <hr>
    <watch/>
    <hr>
    <watch-effect/>
    <hr>
    <button @click="isShowLiftCycle = !isShowLiftCycle">关闭/显示LiftCycle</button>
    <life-cycle v-if="isShowLiftCycle"/>
    <hr>
    <hook-test/>
    <hr>
    <to-ref-and-to-refs/>
    <hr>
    <custom-ref/>
    <hr>
    <inject/>
    <hr>
    <teleport-test/>
    <hr>
    <vuex-test/>
</template>

<script>
import {
    ref,
    onMounted,
    onBeforeMount,
    getCurrentInstance,
    reactive,
    provide
} from "vue";
import List from './components/List';
import ReturnRenderFunction from "@/components/returnRenderFunction";
import RefsReactive from './components/refs-reactive'
import ProxyTest from './components/Proxy-test'
import Computed from './components/Computed'
import Watch from "./components/Watch";
import WatchEffect from "./components/WatchEffect";
import LifeCycle from "./components/LifeCycle";
import HookTest from './components/HookTest';
import ToRefAndToRefs from "@/components/ToRefAndToRefs";
import CustomRef from "@/components/CustomRef";
import Inject from '@/components/Inject';
import TeleportTest from '@/components/Teleport';
import VuexTest from "@/components/VuexTest";
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
        Computed,
        Watch,
        WatchEffect,
        LifeCycle,
        HookTest,
        ToRefAndToRefs,
        CustomRef,
        Inject,
        TeleportTest,
        VuexTest
    },

    setup(props, ctx) {
        const instance = getCurrentInstance();
        // console.log(instance.appContext.config.globalProperties);

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

        const isShowLiftCycle = ref(true)

        const carInfo = {
            name: '奔驰',
            price: '100w'
        }
        provide('carInfo', carInfo)
        return {
            data,
            remove,
            isShowLiftCycle,
            carInfo
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
    padding-bottom: 50px;
}
</style>
