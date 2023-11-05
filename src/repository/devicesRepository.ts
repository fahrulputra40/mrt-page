import ErrorModel, { errorSessionExpired } from "@/helper/baseErrorModel";
import { isNullOrUndefined } from "@/helper/objectValidation";
import BasePagination from "./basePagination";
import BaseRepository from "./baseRepository";
import BaseResponse from "./baseResponse";

interface DeviceModelRequest{
    page: number,
    total: number
}

export interface DeviceModelResponse{
    createdAt: Date | null,
    defaultCalibration: string,
    description: string,
    deviceId: string,
    deviceName: string,
    interval: number,
    precision: number
    sensorResponses: SensorDeviceModel[] | null,
    deviceParams?: DeviceParam[] | null
}

export interface DeviceParam{
    paramId: string,
    paramValue: string
}

export interface SensorDeviceModel{
    calibration: string,
    maxValue: number,
    minValue: number,
    sensorId: string,
    sensorName: string,
    unit: string,
}
export interface DuplicateDevice{
    targetDeviceId: string,
    deviceId: string,
    deviceName: string,
    description: string
}

export interface SensorRecordModelRequest{
    page: number,
    total: number,
    deviceId: string,
    dateFrom: Date,
    dateTo: Date
}

export interface SensorData{
    finalData: number,
    rawData: number,
    sensorId: string
}

export interface BasePaginationSensor extends Omit<BasePagination<any>, 'data'>{
    deviceId: string,
    sensorRecordData: SensorData[]
}

export async function LoadDevice(request: DeviceModelRequest, token: string): Promise<BasePagination<DeviceModelResponse>>{
    try{
        if(isNullOrUndefined(token)) {
            return errorSessionExpired()
        }
         const {data} = await BaseRepository.get<BaseResponse<BasePagination<DeviceModelResponse>>>(`/device?page=${request.page}&total=${request.total}`, {
            headers: {
                Authorization: `${token}`
            }
         });
         return data.data;
    }catch(e){
        return Promise.reject(e)
    }
}

export async function LoadDeviceById(deviceId:string, token:string):Promise<DeviceModelResponse>{
    try{
        if(isNullOrUndefined(token)) {
            return errorSessionExpired()
        }
        const {data} = await BaseRepository.get<BaseResponse<DeviceModelResponse>>(`/device/id/${deviceId}`);
        return data.data;
    }catch(e){
        return Promise.reject(e)
    }
}

export async function LoadSensorRecord(request: SensorRecordModelRequest, token: string):Promise<BasePaginationSensor>{
    try{
        if(isNullOrUndefined(token)) {
            return errorSessionExpired()
        }
         const {data} = await BaseRepository.get<BaseResponse<BasePaginationSensor>>(`/device/${request.deviceId}/sensor-record?page=${request.page}&limit=${request.total}&dateFrom=${request.dateFrom}&dateTo=${request.dateTo}`, {
            headers: {
                Authorization: `${token}`
            }
         });
         return data.data;
    }catch(e){
        return Promise.reject(e)
    }
}