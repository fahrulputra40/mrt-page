import { reactive, UnwrapNestedRefs } from "vue";

export interface BaseStateModel{
    alertMessage: string,
    loadingEvent: boolean,
}

export default function createBaseState() : UnwrapNestedRefs<BaseStateModel>{
    return reactive({
        alertMessage: "",
        loadingEvent: false
    })
}