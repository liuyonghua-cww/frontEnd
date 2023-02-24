<template>
    <view class="content">
        <text>首页</text>
        <view>
            <navigator url="/subPages/chat/chat">前往聊天</navigator>
        </view>
    </view>
</template>

<script >
export default {
    /*http://ts.lagou.uieee.com/api/v2*/
    onLoad() {
        console.log(process.env.NODE_ENV);
        // #ifdef H5
        alert('hello');
        // #endif
        console.log(uni.getSystemInfoSync().platform);
    }
}
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
    margin: 200rpx auto 50rpx;
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
