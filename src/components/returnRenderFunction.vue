<script>
import {ref, h} from 'vue'
export default {
    name: "returnRenderFunction",
    components: {},
    setup() {
        const name = ref('你好')
        return () => h('p1', [name.value])
    }

};
</script>

<style scoped>

</style>
