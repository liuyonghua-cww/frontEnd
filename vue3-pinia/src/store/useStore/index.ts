import { defineStore } from "pinia";
import { Actions, Getters, SEX, State } from "./types";

export const useStore = defineStore<string, State, Getters, Actions>({
    id: 'main',
    state() {
        return {
            name: 'jack',
            age: 20,
            sex: SEX.man
        }
    },
    getters: {
        doubleAge(): number {
            return this.age * 2
        },
        anyMultipleAge(): (mul: number) => number {
            return (mul: number) => this.age * mul
        }
    },
    actions: {
        setName(name: string): void {
            this.name = name;
        }
    }
})
