<template>
  <router-view/>
</template>
<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { Store, useStore } from 'vuex'
import { TYPES } from "@/store/modules/app/types";
const store: Store<any> = useStore();

onBeforeMount(async () => {
    await store.dispatch(`app/${TYPES.GET_LIST}`)
})
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#app {
    height: 100%;
}

</style>
