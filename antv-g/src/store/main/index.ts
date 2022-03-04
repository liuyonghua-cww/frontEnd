import { defineStore } from "pinia";
import { Actions, State } from './types'
import { Canvas } from "@antv/g";

export const useStore = defineStore<string, State, any, Actions>({
    id: 'main',
    state() {
        return {
            canvas: null
        }
    },
    actions: {
        setCanvas(canvas: Canvas): void {
            this.canvas = canvas;
        }
    }

})
