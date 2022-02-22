<template>
    <div id="container">
        <header-container></header-container>
        <router-view/>
    </div>
</template>

<script lang="ts" setup>
import HeaderContainer from '@/components/Header/Index.vue'
</script>

<style scoped lang="scss">
#container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

</style>
