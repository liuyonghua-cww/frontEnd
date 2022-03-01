import { computed, ComputedRef, getCurrentInstance } from "vue";

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
    const instance = getCurrentInstance()!;
    // @ts-ignore
    return computed<T | undefined>(() => instance.proxy?.$props[name] ?? undefined)
}
