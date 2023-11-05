
import loginRepository, { LoginModelResponse, LoginModelRequest } from "@/repository/loginRepository";
import userRepository, { UserMeResponse } from "@/repository/userRepository"
import { convertToErrorModel } from "@/helper/baseErrorModel";

import { Module } from "vuex";
import { getPlugin } from "@/helper/exposeContextPlugin";
import { VueCookies } from "vue3-cookies/dist/interfaces";

export enum TYPES {
    LOAD_USER_META = "module/LOAD_USER",
    MARKER = "module/MARKER"
}

export enum ACTIONS{
    LOAD_USER = "model/LOAD_USER",
    LOGIN = "model/login",
    MARKER = "model/marker"
}

export enum GETTER{
    MARKER = "module/marker"
}

export interface stateModel{
    user: {
        email: string,
        role: string,
        name: string,
        userId: string
    },
    marker: boolean
}

export default <Module<stateModel, any>>{
    state: {
        user: {
            email: "",
            role: "",
            name: "",
            userId: ""
        },
        marker: false
    },
    actions:{
        async [ACTIONS.LOAD_USER](ctx:any):Promise<string>{
            const token = getPlugin<VueCookies>("cookies").get("token");
            const tokenNotExist = token == "" || token == undefined || token == null;
            if(!tokenNotExist){
                try{
                    const userData = await userRepository(token);
                    ctx.commit(TYPES.LOAD_USER_META, userData)
                    return Promise.resolve("");
                }catch(e){
                    return Promise.reject(e);
                }
            }
            return Promise.reject("");
        },
        async [ACTIONS.LOGIN](ctx:any, request: LoginModelRequest):Promise<boolean>{
            try {
                const response: LoginModelResponse = await loginRepository({
                    email: request.email,
                    password: request.password,
                  });
                  getPlugin<VueCookies>("cookies").set("token", response.token);
                  return true;
            } catch (error:any) {
                return Promise.reject(convertToErrorModel(error));
            }
        },
        [ACTIONS.MARKER](ctx:any, marker:boolean){
            ctx.commit(TYPES.MARKER, marker);
        }
    },
    mutations: {
        [TYPES.LOAD_USER_META](state:any, user:UserMeResponse){
            state.user.email = user.email
            state.user.role = user.role
            state.user.name = user.name
            state.user.userId = user.userId
        },
        [TYPES.MARKER](state: stateModel, marker: boolean){
            state.marker = marker;
        }
    },
    getters:{
        [GETTER.MARKER](state:stateModel):boolean{
            return state.marker;
        }
    }
}