import { baseFileUrl, getAdvertisingSpace, getFeeds, getNews } from "../../config/api";
import waterfallsFlow from "../../components/waterfalls-flow/waterfalls-flow.vue";
export default {
    components: {
        waterfallsFlow
    },
    data() {
        return {
            swiperImageList: [{
                image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
            },{
                image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            },{
                image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            }],
            tabs: [
                { name: '推荐' },
                { name: '资讯' },
            ],
            tabCurrent: 0,
            feedsList: [],
            feedsLoading: false,
            newsList: [],
            newsLoading: false,
            showNavBar: false,
            oldFeedsScrollTop: 0,
            oldNewsScrollTop: 0
        };
    },
    onLoad() {
        this.getAdvertisingSpace();
        this.getFeeds('reset');
        this.getNews('reset');
    },
    onPageScroll(e) {
        if (this.tabCurrent === 0) {
            this.oldFeedsScrollTop = e.scrollTop;
        } else {
            this.oldNewsScrollTop = e.scrollTop;
        }

        this.showNavBar = e.scrollTop > 220;
    },
    onPullDownRefresh() {
        if (this.tabCurrent === 0) {
            this.getFeeds('reset');
            this.$refs.waterfallsFlowRef.refresh();
        } else {
            this.getNews('reset');
        }
    },
    onReachBottom() {
        if (this.tabCurrent === 0) {
            if (this.feedsLoading) {
                return
            }
            this.getFeeds();
        } else {
            if (this.newsLoading) {
                return
            }
            this.getNews();
        }
    },
    methods: {
        async getAdvertisingSpace() {
            const res = await getAdvertisingSpace();
            this.swiperImageList = res.map(item => item.data)
        },
        async getFeeds(type) {
            this.feedsLoading = true;
            const res = await getFeeds();
            let feedsList = res.feeds.map(item => {
                return {
                    ...item,
                    image: baseFileUrl(item.images[0].file),
                    avatar: item.user.avatar ? item.user.avatar: '/static/images/nopic.png',
                    name: item.user.name
                }
            });
            if (type === 'reset') {
                this.feedsList = feedsList;
            } else {
                this.feedsList = [...this.feedsList, ...feedsList]
            }
            this.feedsLoading = false;

        },
        async getNews(type) {
            this.newsLoading = true;
            const res = await getNews();
            let newsList = res.map(item => {
                return {
                    ...item,
                    image: baseFileUrl(item.image.id),
                }
            })
            if (type === 'reset') {
                this.newsList = newsList;
            } else {
                this.newsList = [...this.newsList, ...newsList]
            }
            this.newsLoading = false;
        },
        linkTo(index) {
            uni.navigateTo({
                url: `/pages/webview/webview?src=${this.swiperImageList[index].link}`
            })
        },
        switchTab(url) {
            uni.switchTab({
                url: url
            })
        },
        toggleRecommendAndInformation(e) {
            this.tabCurrent = e.index;
            if (this.tabCurrent === 0) {
                console.log(this.oldFeedsScrollTop);
                this.$nextTick(() => {
                    uni.pageScrollTo({
                        duration: 0,
                        scrollTop: this.oldFeedsScrollTop
                    })
                })
            } else {
                this.$nextTick(() => {
                    uni.pageScrollTo({
                        duration: 0,
                        scrollTop: this.oldNewsScrollTop
                    })
                })
            }
        }
    }
};
