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
            newsList: []
        };
    },
    onLoad() {
        this.getAdvertisingSpace();
        this.getFeeds();
        this.getNews();
    },
    methods: {
        async getAdvertisingSpace() {
            const res = await getAdvertisingSpace();
            this.swiperImageList = res.map(item => item.data)
        },
        async getFeeds() {
            const res = await getFeeds();
            this.feedsList = res.feeds.map(item => {
                return {
                    ...item,
                    image: baseFileUrl(item.images[0].file),
                    avatar: item.user.avatar ? item.user.avatar: '/static/images/nopic.png',
                    name: item.user.name
                }
            });
            this.$refs.waterfallsFlowRef.refresh();
        },
        async getNews() {
            const res = await getNews();
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
        }
    }
};
