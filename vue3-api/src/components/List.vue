<template>
    <div>
        <span>{{ data.value }}</span>
        <button @click="remove(data.id)">删除</button>
    </div>
</template>

<script>
import {onBeforeUnmount, onUnmounted} from "vue";

export default {
    props: {
        data: {
            type: Object
        }
    },
    emits: ['remove'],
    // 带有验证函数
    // emits: {
    //     remove: payload  => {
    //         return payload !== 2; // 当传过去的值为 2 时 将不会把这个事件传递给父组件
    //     }
    // },
    /**
     *
     * @param props 值为对象 包含组件外部传递过来且组件内部声明接收了的属性
     * @param ctx 上下文对象
     *        attrs：值为对象 包含组件外部传递过来 但没有在props配置中声明的属性 相当于this.$attrs
     *        slots：收到的插槽内容 相当于this.$slots
     *        emit：分发自定义事件的函数 相当于this.$emit
     * @returns {{remove: remove}}
     */
    setup(props, ctx) {
        // props 不能解构  否则会失去响应式
        console.log(props);
        const remove = (id) => {
          ctx.emit('remove', id);
        }
        onBeforeUnmount(() => {
            console.log(`id为${props.data.id}正在被删除`);
        })
        onUnmounted(() => {
            console.log(`id为${props.data.id}已经删除`);
        })
        return {
            remove
        }
    }
};
</script>

<style scoped>

</style>
