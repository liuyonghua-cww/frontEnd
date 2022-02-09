<template>
    <h1>customRef</h1>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
import {
    customRef
} from 'vue'
export default {
    name: "CustomRef",
    setup() {

        const useDebouncedRef = (value, delay = 1000) => {
            let timer;
            return customRef((track, trigger) => {
               return {
                   get() {
                       console.log('正在获取customRef的值')
                       track(); // 通知vue追踪value的变化
                       return value;
                   },
                   set(newValue) {
                       clearTimeout(timer);
                       timer = setTimeout(() => {
                           console.log('正在设置customRef的值')
                           value = newValue;
                           trigger() // 通知vue去重新解析模板
                       }, delay)
                   }
               }
            })
        }

        let keyWord = useDebouncedRef('hello');

        return {
            keyWord
        }
    }
}
</script>

<style scoped>

</style>
