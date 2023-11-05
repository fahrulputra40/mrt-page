import ErrorModel from "@/helper/baseErrorModel";
import { getPlugin } from "@/helper/exposeContextPlugin";
import BasePagination from "@/repository/basePagination";
import { BasePaginationSensor, DeviceModelResponse, LoadDevice, LoadDeviceById, LoadSensorRecord, SensorRecordModelRequest } from "@/repository/devicesRepository";
import { VueCookies } from "vue3-cookies/dist/interfaces";
import { ActionContext, ActionTree, Module } from "vuex";

interface stateModel {
    listDeviceActive: BasePagination<DeviceModelResponse> | null,
    sensorDevice: DeviceModelResponse | null,
}

enum TYPES {
    LOAD_DEVICE = "device/LOAD_DEVICE",
    SET_SENSOR_DEVICE = "device/SET_SENSOR_DEVICE"
}
export enum GETTER {
    DEVICES = "device/DEVICE",
    SENSOR_DEVICE = "device/LOAD_SENSOR",
}

export enum ACTIONS {
    LOAD_DEVICE = "device/LOAD_DEVICE",
    LOAD_SENSOR = "device/LOAD_SENSOR",
}

export interface SENSOR_DEVICE_DATA{ sensorDevice: DeviceModelResponse, sensorRecordPagination: BasePaginationSensor }

export default <Module<stateModel, any>>{
    state: {
        listDeviceActive: null,
        sensorDevice: null
    },
    actions: <ActionTree<stateModel, any>>{
        async [ACTIONS.LOAD_DEVICE](ctx: any, page: number): Promise<BasePagination<DeviceModelResponse>> {
            try {
                if (page < 1) return Promise.reject(<ErrorModel>{
                    message: "Page harus lebih dari 0",
                    statusCode: "500"
                });
                const loadDevice = await LoadDevice({
                    page: page,
                    total: 50
                }, getPlugin<VueCookies>("cookies").get("token"));
                ctx.commit(TYPES.LOAD_DEVICE, loadDevice)
                return loadDevice;
            } catch (e) {
                return Promise.reject(e);
            }
        },
        async [ACTIONS.LOAD_SENSOR](ctx: ActionContext<stateModel, any>, request: SensorRecordModelRequest): Promise<SENSOR_DEVICE_DATA> {
            let device: DeviceModelResponse | undefined;
            if (ctx.state.listDeviceActive != null) device = ctx.state.listDeviceActive.data.filter(d => d.deviceId == request.deviceId)[0];
            if (device == undefined) {
                try {
                    device = await LoadDeviceById(request.deviceId, getPlugin<VueCookies>("cookies").get("token"));
                } catch (error) {
                    return Promise.reject(error);
                }
            }
            let baseSensor: BasePaginationSensor;
            try {
                baseSensor = await LoadSensorRecord(request, getPlugin<VueCookies>("cookies").get("token"))
            } catch (e) {
                return Promise.reject(e);
            }
            ctx.commit(TYPES.SET_SENSOR_DEVICE, device);
            return {
                sensorDevice: device!,
                sensorRecordPagination: baseSensor
            };
        }
    },
    mutations: {
        [TYPES.LOAD_DEVICE](state: stateModel, devicesModel: BasePagination<DeviceModelResponse>) {
            state.listDeviceActive = devicesModel;
        },
        [TYPES.SET_SENSOR_DEVICE](state: stateModel, deviceModel: DeviceModelResponse) {
            state.sensorDevice = deviceModel;
        }
    },
    getters: {
        [GETTER.DEVICES](state: stateModel): BasePagination<DeviceModelResponse> {
            return state.listDeviceActive!;
        },
        [GETTER.SENSOR_DEVICE](state: stateModel): DeviceModelResponse {
            return state.sensorDevice!;
        }
    }
}