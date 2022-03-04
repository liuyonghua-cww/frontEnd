import { Canvas } from "@antv/g";

export interface State {
    canvas: any;
}

export interface Actions {
    setCanvas(canvas: Canvas): void;
}
