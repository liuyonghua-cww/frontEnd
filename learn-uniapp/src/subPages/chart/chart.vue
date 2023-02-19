<template>
    <view class="chart-container" :style="{height: (screenHeight - keyboardHeight) + 'px'}">
        <view class="content-list"></view>
        <view class="content-input">
            <u-input
                placeholder="请输入内容"
                border="surround"
                v-model="value"
                @change="change"
                shape="circle"
                :adjustPosition="false"
            >
            </u-input>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            screenHeight: 0,
            keyboardHeight: 0
        }
    },
    onLoad() {
        uni.getSystemInfo({
            success: result => {
                this.screenHeight = result.windowHeight;
            }
        })
    },
    onReady() {
        uni.onKeyboardHeightChange(result => {
            this.keyboardHeight = result.height;

        })
    },
    methods: {
        change() {

        }
    }
}
</script>

<style scoped lang="scss">
.chart-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .content-list {
        flex: 1;
    }
    .content-input {
        height: 100rpx;
        display: flex;
        //justify-content: space-between;
        align-content: center;

        > input {
            height: 100%;
            flex: 1;
        }

        > button {

        }
    }
}

</style>
