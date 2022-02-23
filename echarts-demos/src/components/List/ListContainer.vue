<template>
    <div id="list">
        <el-row :gutter="10">
            <el-col :lg="4"
                    :md="6"
                    :sm="12"
                    :xs="24"
                    v-for="(id, index) of ids"
                    :key="id"
            >
                <router-link  :to="{name: 'Editor', query: {id: id, path: path}}">
                    <div class="grid-content">
                        <img :src="getImageUrl(path, id)" alt="图片加载失败"/>
                    </div>
                </router-link>

            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";
import { useList } from "@/hooks";

const {getImageUrl} = useList();
const store: Store<any> = useStore()
const ids: ComputedRef<string[]> = computed(() => store.state.app.singleList.ids);
const path: ComputedRef<string> = computed(() => store.state.app.singleList.path);


</script>

<style scoped lang="scss">
#list {
    margin-top: 10px;
    min-height: calc(100% - 50px);

    .grid-content {
        cursor: pointer;
        margin-bottom: 10px;
        overflow: hidden;
        &:hover {
            > img {
                transform: scale(1.2);
                transition: transform .3s;
            }
        }

        > img {
            width: 100%;
            vertical-align: middle;
        }
    }

    > .el-row {
        margin: 0 !important;
    }
}
</style>
