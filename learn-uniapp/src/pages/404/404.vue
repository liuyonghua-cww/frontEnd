<template>
    <view>
        404
    </view>
</template>

<script>
export default {
    onLoad() {
        setTimeout(() => {
            // 页面被tabbBar注册之后 不能在使用 navigateTo进行跳转
            // uni.navigateTo({
            //     url: '/pages/index/index'
            // })
            uni.switchTab({
                url: '/pages/index/index'
            })
        }, 2000)
    }
}
</script>

<style scoped>
</style>
