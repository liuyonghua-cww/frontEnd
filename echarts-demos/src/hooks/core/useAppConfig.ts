import { ComponentInternalInstance, getCurrentInstance } from "vue";

export const useAppConfig = <T>(propName: string): T => {
    const instance: ComponentInternalInstance | null = getCurrentInstance();
    return instance?.appContext.app.config.globalProperties[propName];
}
