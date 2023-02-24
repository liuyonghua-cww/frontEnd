<template>
    <view>
        {{ name }}
        <u-button type="primary" text="设置名称" @click="_setUserName"></u-button>
    </view>

</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    data() {
        return {

        }
    },

    computed: {
        ...mapState('info', ['name'])
    },

    methods: {
        ...mapMutations('info', ['setUserName']),
        _setUserName() {
            this.setUserName('jack')
        }
    }
};
</script>

<style scoped>

</style>
