import { _GettersTree, StateTree } from "pinia";

export enum SEX {
    man = '男',
    Woman = '女'
}


export interface State extends StateTree {
    name: string;
    age: number;
    sex: SEX
}

export interface Actions {
    setName(name: string): void
}

export interface Getters extends _GettersTree<State> {
    doubleAge(): number,
    anyMultipleAge(): (mul: number) => number;
}
