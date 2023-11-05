import BaseRepository from "./baseRepository";
import BaseResponse from "./baseResponse";

export interface UserMeResponse {
    email: string,
    name: string,
    role: string,
    userId: string
}

export default async function(token: string):Promise<UserMeResponse>{
    try{
        const {data} = await BaseRepository.get<BaseResponse<UserMeResponse>>("/user/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data.data;
    }catch(e){
        return Promise.reject(`Gagal memuat data user, ${e}`)
    }
}