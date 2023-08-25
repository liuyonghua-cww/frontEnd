<template>
    <view class="main">
        <view class="filter">
            <view class="date">
                <van-cell @click="changeDateFilterPopup(true)" :title="formatCurrentFilterDate" arrow-direction="down"
                          is-link :border="false"/>
            </view>
            <view class="btn">
                <van-icon name="filter-o" color="#fff"/>
                <text>筛选</text>
            </view>
        </view>
        <van-popup v-model:show="dateFilterPopup"
                   position="bottom"
                   custom-style="height: 220px;"
                   @close="changeDateFilterPopup(false)"
                   round
                   :safe-area-inset-bottom="false"

        >
            <van-datetime-picker type="year-month"
                                 :value="currentFilterDate"
                                 @confirm="selectCurrentFilterDate($event)"
                                 @cancel="changeDateFilterPopup(false)"
                                 :visible-item-count="4"
            />
        </van-popup>
    </view>

</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import dayjs from 'dayjs';

const dateFilterPopup = ref(false);
const changeDateFilterPopup = (show: boolean) => {
    dateFilterPopup.value = show;
}

const currentFilterDate = ref(new Date().getTime());
const selectCurrentFilterDate = (v: any) => {
    const {detail} = v;
    currentFilterDate.value = detail;
    changeDateFilterPopup(false)
}
const formatCurrentFilterDate = computed(() => {
    return dayjs(currentFilterDate.value).format('YYYY-MM')
})
</script>

<style lang="scss" src="./index.scss"></style>
