<template>
    <view class="content">
        <text>首页</text>
        <view>
            <navigator url="/subPages/chart/chart">前往聊天</navigator>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onPullDownRefresh, onShow } from "@dcloudio/uni-app";

const title = ref('Hello1231');
onShow(() => {
    console.log("Index Show");
})
onPullDownRefresh(() => {
    console.log('refreshing....')
})
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $uni-color-primary;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
