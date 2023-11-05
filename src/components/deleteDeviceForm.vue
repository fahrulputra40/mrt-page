<template>
	<div class="container-form" ref="deviceFormEl">
		<div class="container-wrapper">
			<div class="form-layout">
				<h6>Device</h6>
				<p class="mb-0" title-form>Delete device {{deviceModel.deviceName}}</p>
				<div
					class="alert alert-danger mt-3 mb-4 d-flex justify-content-between align-items-center"
					role="alert"
				>
					<div>
						<i
							class="fa-solid fa-triangle-exclamation"
							style="color: var(--bs-alert-color)"
						></i>
						<span class="ms-2" style="color: var(--bs-alert-color)"
							>Jaringan bermasalah</span
						>
					</div>
					<button
						type="button"
						class="btn-close"
						style="color: var(--bs-alert-color)"
						@click="hideAlert"
						data-bs-dismiss="alert"
						aria-label="Close"
					></button>
				</div>
				<div class="mt-3 d-flex justify-content-end">
					<button class="btn btn-mrt me-3" @click="saveButton">OK</button>
					<button class="btn btn-mrt-outline" @click="deleteDeviceHide">Batal</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {DeviceModelResponse} from '@/repository/devicesRepository';

export default defineComponent({
    setup(props, {emit}) {
        const deleteDeviceHide = ()=>{
            emit("close");
        }
        const saveButton = ()=>{
            console.log("delete: ", props.deviceModel.deviceId);
        }

        return{
            deleteDeviceHide,
            saveButton
        }
    },
    props:{
        deviceModel: {
            required: true,
            type: Object as PropType<DeviceModelResponse>
        },

    }
})
</script>
