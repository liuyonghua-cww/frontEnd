<template>
    <div id="pagination">
        <el-pagination background layout="prev, pager, next"
                       :page-size="32"
                       :page-count="pageCount"
                       @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";
import { useList } from "@/hooks";
const store: Store<any> = useStore();
const { handleCurrentChange } = useList()
const pageCount: ComputedRef<number> = computed(() => store.state.app.pageCount);


</script>

<style scoped lang="scss">
#pagination {
    height: 50px;
    display: flex;
    justify-content: center;
}
</style>
