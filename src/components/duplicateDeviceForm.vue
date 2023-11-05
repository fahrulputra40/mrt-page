<template>
	<div class="container-form" ref="deviceFormEl">
		<div class="container-wrapper">
			<div class="form-layout">
				<h6>Device</h6>
				<p class="mb-0" title-form>Duplicate device {{deviceModel.deviceName}}</p>
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
				<div class="sensor-form">
					<div class="form-section">
						<div class="form-section-title">
							<span class="number">
								<span>1</span>
							</span>
							<h6>Data Device</h6>
						</div>
						<ul class="row-show" ref="inputForm">
							<li class="showw">
								<div class="comp">
									<div class="mb-3">
										<label class="form-label">Device ID</label>
										<input type="text" class="form-control" input-device-id />
									</div>
									<div class="mb-3">
										<label class="form-label">Nama Device</label>
										<input type="text" class="form-control" input-device-name />
									</div>
									<div class="mb-3">
										<label class="form-label">Deskripsi Device</label>
										<textarea
											class="form-control"
											rows="2"
											input-description
										></textarea>
									</div>
								</div>
							</li>
							<li class="spacingg"></li>
						</ul>
						<div class="form-section-title">
							<span class="number">
								<span>2</span>
							</span>
							<h6>Selesai</h6>
						</div>
						<div class="align-right">
							<button class="btn" @click="addDeviceHide">Tutup</button>
							<button class="btn btn-mrt" @click="saveButton">Simpan</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import {DeviceModelResponse, DuplicateDevice} from '@/repository/devicesRepository';

export default defineComponent({
    setup(props, {emit}) {
        const inputForm = ref<HTMLElement>()
        const addDeviceHide = ()=>{
            emit("close");
        }
        const validateForm = (val: HTMLInputElement): string => {
				let text = "";
				if (val.value == "") {
					text = "Form masih kosong";
				}
				if (
					text !== "" &&
					val.parentElement?.getElementsByClassName("form-text").length == 0
				) {
					const element = document.createElement("div");
					element.classList.add("form-text");
					element.textContent = text;
					val.parentElement?.insertBefore(element, val.nextElementSibling);
					Array.from(val.parentElement?.childNodes as Iterable<Element>).forEach(
						(d) => {
							const tagName = d.tagName.toLocaleLowerCase();
							if (["input", "textarea"].includes(tagName))
								d.classList.add("is-invalid");
							else if ("label" == tagName) d.classList.add("text-danger");
							else d.classList.add("invalid-feedback");
						}
					);
				} else if(text == ""){
					Array.from(val.parentElement?.childNodes as Iterable<Element>).forEach(
						(d) => {
							const tagName = d.tagName.toLocaleLowerCase();
							if (["input", "textarea"].includes(tagName))
								d.classList.remove("is-invalid");
							else if ("label" == tagName) d.classList.remove("text-danger");
							else if (d.classList.contains("form-text")) d.remove();
						}
					);
				}
				return val.value;
			};
        const saveButton = ()=>{
            const duplicateDevice:DuplicateDevice = {
                targetDeviceId: props.deviceModel.deviceId,
                deviceId: validateForm(inputForm.value?.querySelector("[input-device-id]") as HTMLInputElement),
                description: validateForm(inputForm.value?.querySelector("[input-description]") as HTMLInputElement),
                deviceName: validateForm(inputForm.value?.querySelector("[input-device-name]") as HTMLInputElement),
            }
            console.log(duplicateDevice);
            
        }

        return{
            addDeviceHide,
            saveButton,
            inputForm
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
