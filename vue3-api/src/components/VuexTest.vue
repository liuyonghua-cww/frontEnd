<template>
    <h1>vuexTest</h1>
    <ul>
        <li v-for="item of goods"
            :key="item.id"
        >
            {{item.name}} --- {{item.quantity}}
            <button @click="addToCart(item.id)">数量加1</button>
        </li>
    </ul>
</template>

<script>
import {
    useStore
} from 'vuex'
export default {
    name: "VuexTest",
    setup() {
        const store = useStore();
        const goods = store.state.cart.goods;
        const addToCart = id => {
            store.commit('cart/incrementItemQuantity', {id, number: 1})
        }
        return {
            goods,
            addToCart
        }
    }
}
</script>

<style scoped>

</style>
