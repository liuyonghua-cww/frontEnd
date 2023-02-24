<template>
    <view>
        <web-view :src="src"></web-view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            src: ''
        };
    },
    onLoad(option) {
        this.src = option.src;
        console.log(option);
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
