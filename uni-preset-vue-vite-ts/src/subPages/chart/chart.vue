<template>
    <view class="chart-container">
        <view class="content-list"></view>
        <view class="content-input">
            <input type="text" placeholder="请输入"/>
        </view>
    </view>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.chart-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content-list {
        flex: 1;
    }

    .content-input {
        height: 100rpx;
        display: flex;
        //justify-content: space-between;
        align-content: center;
        >input {
            height: 100%;
            flex: 1;
        }
        >button {

        }
    }
}

</style>
