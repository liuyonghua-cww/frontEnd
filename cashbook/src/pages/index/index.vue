<template>
    <view class="main">
        <view class="filter">
            <view class="date">
                <van-cell title="单元格" arrow-direction="down" :border="false"/>
            </view>
            <view class="btn">
                <van-icon name="filter-o" color="#fff"/>
                <text>筛选</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style lang="scss" src="./index.scss" scoped></style>
