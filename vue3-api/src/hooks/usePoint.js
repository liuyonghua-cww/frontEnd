import { onMounted, onUnmounted, reactive } from "vue";

export const usePoint = () => {
    const mousePoint = reactive({x: 0, y: 0});
    const getPoint = (event) => {
        const {pageX, pageY} = event;
        mousePoint.x = pageX;
        mousePoint.y = pageY;
    }
    const windowClick = (e) => {
        getPoint(e);
    };
    onMounted(() => {
        window.addEventListener('click', windowClick)
    })
    onUnmounted(() => {
        window.removeEventListener('click', windowClick);
    })

    return mousePoint;

}
