<template>
<h1>Hook Test</h1>
    <div>鼠标点击的坐标为：x--{{ mousePoint.x }}，y--{{ mousePoint.y }}</div>
</template>

<script>
import { usePoint } from "../hooks/usePoint";

export default {
    name: "HookTest",
    components: {},
    props: {},
    setup() {
        const mousePoint = usePoint()
        return {
            mousePoint
        }
    }
};
</script>

<style scoped>

</style>
