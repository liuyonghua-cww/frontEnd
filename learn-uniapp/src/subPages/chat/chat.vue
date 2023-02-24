<template>
    <view class="chat-container">
        <view class="content-container"
              :style="{paddingBottom: '120rpx', paddingBottom: keyboardHeight ? keyboardHeight * 2 + 100 + 'rpx': 'calc(100rpx + constant(safe-area-inset-bottom))',paddingBottom:keyboardHeight ? keyboardHeight * 2 + 100 + 'rpx': 'calc(100rpx + env(safe-area-inset-bottom))' }"
        >
            <view class="content-list">
                <block v-for="(item, index) of chatList" :key="index">
                    <view class="text" v-if="item.type === 'text'">
                        <u--text :text="item.value" wordWrap="break-word" :align="item.isMe? 'right': 'start'"></u--text>
                    </view>
                    <view class="img" v-if="item.type === 'image'" :style="{'justify-content': item.isMe? 'flex-end': 'flex-start'}">
                        <image mode="widthFix" :src="item.value"></image>
                    </view>
                </block>
            </view>
        </view>
        <view class="content-input" :style="{paddingBottom: '20rpx', paddingBottom: keyboardHeight ? keyboardHeight + 'px': 'constant(safe-area-inset-bottom)',paddingBottom:keyboardHeight ? keyboardHeight + 'px': 'env(safe-area-inset-bottom)' }">
            <u-input
                    placeholder="请输入内容"
                    border="surround"
                    v-model="value"
                    shape="circle"
                    :adjustPosition="false"
            >
            </u-input>
            <icon class="iconfont icon-tupian" @click="chooseMedia()"></icon>
            <view class="btn-send">
                <u-button type="primary" text="确定" @click="click()"></u-button>
            </view>
        </view>

        <u-toast ref="uToast"></u-toast>
    </view>

</template>

<script src="./chat.js">

</script>

<style scoped lang="scss" src="./chat.scss">


</style>
