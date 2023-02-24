export default {
    data() {
        return {
            value: '',
            screenHeight: 0,
            keyboardHeight: 0,
            chatList: [
                {
                    type: 'text',
                    isMe: true,
                    value: 'hello'
                },
                {
                    type: 'image',
                    value: '/static/images/发现.png',
                    isMe: true,
                }
            ]
        };
    },
    onLoad() {
        uni.getSystemInfo({
            success: result => {
                this.screenHeight = result.windowHeight;
            }
        });
    },
    onShow() {
        this.chatList = JSON.parse(uni.getStorageSync('chatList')) || [];
        this.$nextTick(() => {
            uni.pageScrollTo({
                scrollTop: 999999,
                success: result => {
                    console.log('scroll success');
                }
            });
        });
    },

    onReady() {
        uni.onKeyboardHeightChange(result => {
            const { height } = result;
            this.keyboardHeight = height;
            this.$nextTick(() => {
                uni.pageScrollTo({
                    scrollTop: 999999,
                    success: result => {
                        console.log('scroll success');
                    }
                });
            })
        });

    },

    methods: {
        click() {
            if (this.value.trim() === '') {
                this.$refs.uToast.show({
                    type: 'default',
                    message: "发送内容不能为空",
                });
            } else {
                this.chatList.push({
                    type: 'text',
                    value: `我说：${ this.value }`
                });
            }
            this.value = '';
            uni.setStorageSync('chatList', JSON.stringify(this.chatList));
            this.$nextTick(() => {
                uni.pageScrollTo({
                    scrollTop: 999999,
                    success: result => {
                        console.log('scroll success');
                    }
                });
            });
        },
        chooseMedia() {
            uni.chooseMedia({
                count: 1,
                mediaType: ['image', 'video'],
                sourceType: ['album', 'camera'],
                success: result => {
                    this.chatList.push({
                        type: 'image',
                        value: result.tempFiles[0].tempFilePath,
                        isMe: true,
                    });
                    this.chatList.push({
                        type: 'image',
                        value: result.tempFiles[0].tempFilePath,
                        isMe: false,
                    });
                    uni.setStorageSync('chatList', JSON.stringify(this.chatList));
                    this.$nextTick(() => {
                        uni.pageScrollTo({
                            scrollTop: 999999,
                            success: result => {
                                console.log('scroll success');
                            }
                        });
                    });
                }
            });
        }
    }
};
