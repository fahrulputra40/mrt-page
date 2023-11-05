import BaseRepository from "./baseRepository"
import BaseResponse from "./baseResponse"


export interface LoginModelRequest{
    email: string,
    password: string
}

export interface LoginModelResponse{
    token: string,
    expired: Date
}


export default async function (loginModel: LoginModelRequest): Promise<LoginModelResponse> {
    try{
        const {data}  = await BaseRepository.post<BaseResponse<LoginModelResponse>>("/auth/login", loginModel, {})
        return data.data;   
    }catch(e){
        return Promise.reject(e)
    }
}