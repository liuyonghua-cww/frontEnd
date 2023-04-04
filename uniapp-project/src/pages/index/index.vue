<template>
    <view class="index-container">
        <u-navbar :autoBack="true" v-if="showNavBar">
            <template v-slot:center>
                <view class="tabs">
                    <u-tabs :list="tabs" :current="tabCurrent"
                                @click="toggleRecommendAndInformation($event)"
                    ></u-tabs>
                </view>
            </template>
        </u-navbar>

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
                <u-tabs :list="tabs" :current="tabCurrent"
                        @click="toggleRecommendAndInformation($event)"
                ></u-tabs>
            </view>
            <view class="content">
                <u-transition  :show="tabCurrent === 0" mode="fade">
                    <view class="recommend transition">
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
                </u-transition>
                <u-transition :show="tabCurrent === 1" mode="fade">
                    <view class="news transition">
                        <u-list height="auto">
                            <u-list-item v-for="(item, index) of newsList"
                                         :key="index">
                                <u-cell>
                                    <template v-slot:title>
                                        <view class="left">
                                            <u--text :lines="2"
                                                     :text="item.title"
                                                     :size="30"
                                            >
                                            </u--text>
                                            <view class="bottom">
                                                <text>{{ item.author }}</text>
                                                <text>
                                                    {{ item.updated_at }}
                                                </text>
                                            </view>
                                        </view>
                                    </template>
                                    <template v-slot:right-icon>
                                        <u--image width="80px"
                                                  mode="widthFix"
                                                  :src="item.image"
                                        ></u--image>
                                    </template>
                                </u-cell>
                            </u-list-item>
                        </u-list>
                    </view>
                </u-transition>
            </view>
        </view>
    </view>
</template>

<script src="./index.js">

</script>

<style lang="scss" src="./index.scss" scoped>

</style>
