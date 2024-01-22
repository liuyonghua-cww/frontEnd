<script setup lang="ts">
import { Canvas, CanvasEvent, Circle, Text, Line } from "@antv/g";
import { Renderer } from '@antv/g-canvas'
import {onMounted} from 'vue';
let circleFill = '#1890FF'

const circle = new Circle({
    style: {
        cx: 54,
        cy: 54,
        r: 50,
        fill: circleFill,
        stroke: '#F04864',
        lineWidth: 4,
        cursor: 'pointer',
        zIndex: 1
    }
})
const circleText = new Text({
    style: {
        text: 'circleText',
        fontSize: 20,
        fill: "skyblue",
        textAlign: 'center',
        textBaseline: 'middle'
    }
})
circle.appendChild(circleText);
circle.addEventListener('mouseenter', () => {
    circle.style.fill = '#F04864';
})
circle.addEventListener('mouseleave', () => {
    circle.style.fill = circleFill;
})
const circle1 = new Circle({
    style: {
        cx: 54,
        cy: 54,
        r: 50,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
        cursor: 'pointer',
        zIndex: 1
    }
})
const circleText1 = new Text({
    style: {
        text: 'circleText1',
        fontSize: 20,
        fill: "skyblue",
        textAlign: 'center',
        textBaseline: 'middle'
    }
})
circle1.appendChild(circleText1);
circle1.setPosition(400, 54)

const edge = new Line({
    style: {
        x1: 54,
        y1: 54,
        x2: 400,
        y2: 54,
        stroke: '#ffffff',
        lineWidth: 2,
    },
});

let canvas;
onMounted(async () => {
    canvas = new Canvas({
        container: 'container',
        width: 500,
        height: 500,
        renderer: new Renderer()
    })
    await canvas.ready;
    canvas.appendChild(circle);
    canvas.appendChild(circle1)
    canvas.appendChild(edge);
})

</script>

<template>
    <div id="container"></div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
