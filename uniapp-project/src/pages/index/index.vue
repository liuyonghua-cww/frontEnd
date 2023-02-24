<template>
    <view class="index-container">
        <u-swiper
                :list="swiperImageList"
                height="400"
                keyName="image"
                @click="linkTo($event)"
        ></u-swiper>
        <view class="jump-tabBar-btns">
            <view class="btn">
                <u-button shape="circle"
                          iconColor="rgba(255,255,255)"
                          @click="switchTab('/pages/dynamic/dynamic')"
                >
                    <icon class="iconfont icon-airudiantubiaohuizhi-zhuanqu_zixundongtai-copy"
                          style="font-size: 48rpx; margin-right: 20rpx;"
                    ></icon>
                    <text>精彩动态</text>
                </u-button>
            </view>
            <view class="btn">
                <u-button shape="circle"
                          iconColor="rgba(255,255,255)"
                          @click="switchTab('/pages/me/me')"
                >
                    <icon class="iconfont icon-wo"
                          style="font-size: 48rpx; margin-right: 20rpx;"
                    ></icon>
                    <text>个人中心</text>
                </u-button>
            </view>
        </view>
        <view class="recommend-information">
            <view class="tabs">
                <u-sticky bgColor="#fff">
                    <u-tabs :list="tabs" :currnet="tabCurrent"
                            @click="toggleRecommendAndInformation($event)"
                    ></u-tabs>
                </u-sticky>
            </view>
            <view class="content">
                <view class="recommend" v-if="tabCurrent === 0">
                    <waterfalls-flow ref="waterfallsFlowRef"
                                     :value="feedsList"
                                     :column="2"
                                     :columnSpace="1.5" :seat="2"
                    >
                        <!-- #ifdef MP-WEIXIN -->
                        <view class="item" v-for="(item,index) in feedsList" :key="index" slot="slot{{index}}">

                            <view class="item-container">
                                <view class="feed-content">
                                    <u--text :text="item.feed_content"
                                             :size="30"
                                             :lines="1"
                                    ></u--text>
                                </view>
                                <view class="profile">
                                    <u--image :src="item.avatar"
                                              width="20px"
                                              mode="widthFix"
                                    ></u--image>
                                    <u--text :text="item.name"
                                             :size="30"
                                    ></u--text>
                                </view>
                            </view>

                        </view>
                        <!-- #endif -->
                    </waterfalls-flow>

                </view>
                <view class="news" v-if="tabCurrent === 1">
                    <u-list >
                        <u-list-item>
                            <u-cell>
                                <view v-slot:title>
                                    1
                                </view>
                                <u--image width="20px"
                                          mode="widthFix"
                                          v-slot:right-icon
                                ></u--image>
                            </u-cell>
                        </u-list-item>
                    </u-list>
                </view>
            </view>
        </view>
    </view>
</template>

<script src="./index.js">

</script>

<style lang="scss" src="./index.scss" scoped>

</style>
