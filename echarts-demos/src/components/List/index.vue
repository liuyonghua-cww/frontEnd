<template>
    <div id="list_wrapper">
        <list-container/>
        <pagination/>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useList } from "@/hooks";
import ListContainer from './ListContainer.vue';
import Pagination from './Pagination.vue'

const {getSingleList} = useList()
onBeforeMount(() => {
    getSingleList()
})
</script>

<style scoped lang="scss">
#list_wrapper {
    width: 100%;
    flex: 1;
    overflow: overlay;
}

</style>
