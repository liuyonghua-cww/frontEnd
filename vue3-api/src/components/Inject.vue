<template>
    <h1>inject</h1>
    <div>车辆信息：{{carInfo.name}}---{{carInfo.price}}</div>
</template>

<script>
import {inject} from 'vue'
export default {
    name: "Inject",
    setup() {
        let carInfo = inject('carInfo')
        return {
            carInfo
        }
    }
}
</script>

<style scoped>

</style>
