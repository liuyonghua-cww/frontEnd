<template>
    <div id="editor_main">
        <div id="chart_main"></div>
    </div>
</template>

<script lang="ts" setup>
import { useEditor } from "@/hooks";
import { onBeforeMount } from "vue";

const {getOption} = useEditor()
onBeforeMount(() => {
    getOption()
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
