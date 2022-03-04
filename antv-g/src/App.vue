<template>
    <div id="container">

    </div>
</template>

<script lang="ts" setup>
import { Canvas, Circle, CircleStyleProps, Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { useStore } from "@/store/main";
import { onMounted } from "vue";
import { EAction, useMouseEvent } from "@/hooks/useMouseEvent";

const store = useStore();
let canvas: Canvas;
const{mouseenter,mouseleave} = useMouseEvent()
onMounted(() => {
    canvas = new Canvas({
        container: 'container',
        width: 700,
        height: 700,
        renderer: new Renderer()
    })
    store.setCanvas(canvas);
    const circle = new Circle({
        style: {
            x: 100,
            y: 100,
            r: 50,
            fill: '#1890FF',
            stroke: '#F04864',
            lineWidth: 2,
            cursor: 'pointer',
        },
    });
    const text = new Text({
       style: {
           text: 'circle', // 文本内容
           fontFamily: 'Avenir', // 字体
           fontSize: 22, // 字号
           fill: '#fff', // 文本颜色
           textAlign: 'center', // 水平居中
           textBaseline: 'middle', // 垂直居中
       }
    })
    circle.appendChild(text);
    canvas.appendChild(circle)

    mouseenter<Partial<CircleStyleProps>>(circle, EAction.changeStyle, {fill: 'skyblue'})
    mouseleave<Partial<CircleStyleProps>>(circle, EAction.changeStyle, {fill: '#1890FF',})
})






</script>

<style lang="scss">
</style>
