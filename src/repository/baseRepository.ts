import axios, { AxiosError, AxiosResponse } from "axios";
import BaseResponse from "./baseResponse";
import BaseErrorModel from "@/helper/baseErrorModel";

const baseUrl = "http://103.117.57.142:8070"

const http = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
})

http.interceptors.response.use(function(response: AxiosResponse<BaseResponse<any>>){
    if(response.data.status !== "00"){
        const error: BaseErrorModel = {
            message: response.data.description,
            statusCode: response.data.status
        };
        return Promise.reject(error);
    }
    return response;
},
function(error:AxiosError<BaseResponse<any>>){
    const baseErrorModel: BaseErrorModel = {
        message: error.response?.data.description || "System Error",
        statusCode: error.response?.data.status || "500"
    };
    return Promise.reject(baseErrorModel);
}
);

export default http;