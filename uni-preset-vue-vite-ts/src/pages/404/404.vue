<template>
    <view>
        404
    </view>
</template>

<script lang="ts" setup>
import {onLoad} from '@dcloudio/uni-app';
onLoad(()=> {
    setTimeout(() => {
        uni.navigateTo({
            url: '/pages/index/index'
        })
    }, 2000)
})
</script>

<style scoped>
</style>
