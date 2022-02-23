<template>
    <div id="editor_main">
        <div id="chart_main"></div>
    </div>
</template>

<script lang="ts" setup>
import { useEditor, useFunction } from "@/hooks";
import { getCurrentInstance, onMounted } from "vue";
import { Store, useStore } from "vuex";
import * as echarts from 'echarts'
import { ComponentInternalInstance } from "@vue/runtime-core";

(window as any).echarts = echarts;

const { getOption } = useEditor()
const store: Store<any> = useStore();
let option: string | undefined;
let echartsInstance: any;

const instance: ComponentInternalInstance = getCurrentInstance()!;
onMounted(async () => {
    await getOption();
    echartsInstance = echarts.init((document.querySelector('#chart_main') as HTMLElement))
    option = useFunction<string>(store.state.app.echartsOption, echartsInstance);
    echartsInstance.setOption(option)
})

</script>

<style scoped lang="scss">
#editor_main {
    height: 100%;

    > #chart_main {
        height: 100%;
        background-color: #ccc;
    }
}

</style>
