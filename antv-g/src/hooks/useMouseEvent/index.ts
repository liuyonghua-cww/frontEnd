import { DisplayObject } from '@antv/g';
import { useSetStyle } from "@/hooks/useSetStyle";
export enum EAction {
    changeStyle
}
export interface IMouseEvent {
    mouseenter<T>(node: DisplayObject, actionType: EAction, style?: T): void;
    mouseleave<T>(node: DisplayObject, actionType: EAction, style?: T): void;
}
export const useMouseEvent = (): IMouseEvent => {
    const { setStyle } = useSetStyle()
    const mouseenter = <T>(node: DisplayObject, actionType: EAction, style?: T): void => {
        node.addEventListener('mouseenter', () => {
            switch (actionType) {
                case EAction.changeStyle:
                    if (!style) {
                        break
                    }
                    setStyle(node, style);
                    break;
            }
        })

    }
    const mouseleave = <T>(node: DisplayObject, actionType: EAction, style?: T): void => {
        node.addEventListener('mouseleave', () => {
            switch (actionType) {
                case EAction.changeStyle:
                    if (!style) {
                        break
                    }
                    setStyle(node, style);
                    break;
            }
        })

    }
    return {
        mouseenter,
        mouseleave

    }
}
