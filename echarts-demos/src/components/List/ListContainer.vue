<template >
    <div id="list">
        <el-row :gutter="10">
            <el-col :span="4"
                    v-for="(id, index) of singleList.ids"
                    :key="id"

            >
                <div class="grid-content">{{ id }}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang ="ts" setup>
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";
import { SingleList } from "@/store/modules/app/types";
const store: Store<any> = useStore()
const singleList: ComputedRef<SingleList> = computed(() => store.state.app.singleList)
</script>

<style scoped lang="scss">
#list {

    .grid-content {
        height: 200px;
        background-color: darkcyan;
        margin-bottom: 10px;
    }
}
</style>
