<template>
    <h1>teleport</h1>
    <button @click="show = true">打开弹窗</button>
    <div class="teleport"
    >
        <teleport to="body">
            <div class="dialog"
                 v-if="show"
            >
                <button  @click="show=false">关闭弹窗</button>
                内容区域
            </div>
        </teleport>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "Teleport",
    setup() {
        let show = ref(false);
        return {
            show
        }
    }
}
</script>

<style scoped lang="scss">
.teleport {
    margin-top: 20px;
    width: 100%;
    min-height: 200px;
    box-sizing: border-box;
    background-color: #ccc;
    padding: 10px;
}
.dialog {
    width: 300px;
    height: 300px;
    background: #f10215;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%,0)
}

</style>
