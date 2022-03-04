import { DisplayObject } from "@antv/g";

export interface ISetStyle {
    setStyle(node: DisplayObject, style: any): void;
}
export const useSetStyle = (): ISetStyle => {
    const setStyle = (node: DisplayObject, style: any) => {
        for (const key in style) {
            node.style[key] = style[key]

        }
    }
    return {
        setStyle

    }
}
