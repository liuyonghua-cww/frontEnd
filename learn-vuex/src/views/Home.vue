<template>
    <div class="home">
        {{ $store.getters.compareNum }}
        {{ $store.getters.getUserByAge(10) }}]
        <br>
        {{ $store.state.num }}
        <button @click="setNum">+</button>
        <button @click="decreaseNum">-</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    computed: {
      num() {
          return this.$store.state.num;
      }
    },
    components: {
        HelloWorld
    },
    methods: {
        setNum() {
            this.$store.commit('setNUm', 20)
        },
        decreaseNum() {
            this.$store.dispatch('decreaseNumAsync', 10)
        }
    }
}
</script>
