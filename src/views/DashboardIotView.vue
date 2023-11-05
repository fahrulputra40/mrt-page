<template>
	<div>
		<SidebarComp />
		<main class="dashboard">
			<HeaderComp />
			<section class="welcome breadcrum">
				<section>
					<h3>Daftar Device</h3>
					<p>List device IoT yang sudah terdaftar</p>
				</section>
				<ul>
					<li>Device</li>
				</ul>
			</section>
			<section class="dashboard-body">
				<div class="card">
					<div
						class="card-loading"
						style="display: block"
						v-if="baseState.loadingEvent"
					></div>
					<div class="card-body">
						<section class="mb-4 mt-2 position-relative">
							<h6 class="table-title">Ringkasan Device</h6>
							<button
								class="btn btn-mrt-outline d-block me-0 ms-auto"
								@click="addDeviceShow"
							>
								Tambah Device
							</button>
							<div class="container-form d-none" ref="deviceFormEl">
								<div class="container-wrapper">
									<div class="form-layout">
										<h6>Device</h6>
										<p class="mb-0" title-form>Tambah Device</p>
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
												<ul class="row-show">
													<li class="showw">
														<div class="comp">
															<div class="mb-3">
																<label class="form-label">Device ID</label>
																<input
																	type="text"
																	class="form-control"
																	input-device-id
																/>
															</div>
															<div class="mb-3">
																<label class="form-label">Nama Device</label>
																<input
																	type="text"
																	class="form-control"
																	input-device-name
																/>
															</div>
															<div class="mb-3">
																<label class="form-label"
																	>Deskripsi Device</label
																>
																<textarea
																	class="form-control"
																	rows="2"
																	input-description
																></textarea>
															</div>
															<div class="mb-3">
																<label class="form-label"
																	>Default Kalibarsi</label
																>
																<input
																	type="text"
																	class="form-control"
																	input-kalibrasi
																/>
															</div>
															<div class="mb-3">
																<label class="form-label"
																	>Presisi(Jumlah angka setelah koma)</label
																>
																<input
																	type="number"
																	class="form-control"
																	input-precition
																/>
															</div>
															<div class="mb-3">
																<label class="form-label"
																	>Interval(detik)</label
																>
																<input
																	type="number"
																	class="form-control"
																	input-interval
																/>
															</div>
														</div>
													</li>
													<li class="spacingg"></li>
												</ul>
												<div class="form-section-title">
													<span class="number">
														<span>2</span>
													</span>
													<h6>Opsional Param</h6>
												</div>
												<ul class="row-show">
													<li class="d-none" ref="baseParam">
														<div class="comp">
															<span class="float-start sensor-name clearfix"
																>Parameter</span
															>
															<div
																class="sensor-ctr d-flex justify-content-end"
															>
																<button class="btn del-node">
																	<i class="fa-solid fa-trash"></i>
																</button>
															</div>
														</div>
														<div class="comp d-block">
															<div class="mb-3">
																<label class="form-label">Param ID</label>
																<input
																	type="text"
																	class="form-control"
																	param-id
																/>
															</div>
															<div class="mb-3">
																<label class="form-label">Param Value</label>
																<input
																	type="text"
																	class="form-control"
																	param-value
																/>
															</div>
														</div>
													</li>
													<li class="action">
														<button class="btn d-block" @click="addParam">
															Tambah
														</button>
													</li>
													<li class="spacingg"></li>
												</ul>
												<div class="form-section-title">
													<span class="number">
														<span>3</span>
													</span>
													<h6>Selesai</h6>
												</div>
												<div class="align-right">
													<button class="btn" @click="addDeviceHide">
														Tutup
													</button>
													<button class="btn btn-mrt" @click="saveButton">
														Simpan
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="table-container">
							<div class="table-scroll">
								<div class="table-wrap">
									<table class="table">
										<thead class="table-mrt">
											<tr>
												<th scope="col">No</th>
												<th scope="col">Nama Device</th>
												<th scope="col">Device ID</th>
												<th scope="col">Deskripsi</th>
												<th scope="col"></th>
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="(d, idx) in deviceState.devices"
												v-bind:key="d.deviceId"
											>
												<th scope="row">{{ idx + 1 }}</th>
												<td>
													<router-link :to="`/dashboard-sensor/${d.deviceId}`">{{ d.deviceName }}</router-link>
												</td>
												<td>{{ d.deviceId }}</td>
												<td>{{ d.description }}</td>
												<td class="action">
													<button @click="editDeviceBtn(d.deviceId)">
														<i class="fa-solid fa-pencil"></i>
													</button>
													<button
														class="ms-2"
														@click="duplicateDevice(d.deviceId)"
													>
														<i class="fa-solid fa-copy"></i>
													</button>
													<button
														class="ms-2"
														@click="deleteDevice(d.deviceId)"
													>
														<i class="fa-solid fa-trash"></i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="table-footer">
								<p>
									Halaman {{ deviceState.page }} dari
									{{ deviceState.totalPage }}
								</p>
								<section>
									<button class="btn inactive">
										<i class="fa-solid fa-chevron-left"></i>
									</button>
									<button class="btn ms-1 inactive">
										<i class="fa-solid fa-chevron-right"></i>
									</button>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<ErrorComp />
		<DuplicateDeviceForm
			v-if="deviceState.duplicateDeviceTarget != null"
			:deviceModel="deviceState.duplicateDeviceTarget"
			@close="closeDuplicateForm"
		/>
		<DeleteDeviceForm :deviceModel="deviceState.deleteDeviceTarget" v-if="deviceState.deleteDeviceTarget != null" @close="deviceState.deleteDeviceTarget = null"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, reactive, ref } from "vue";
	import SidebarComp from "../components/sidebarComp.vue";
	import HeaderComp from "../components/headerComp.vue";
	import ErrorComp from "@/components/errorComp.vue";
	import createBaseState from "@/helper/baseStateHelper";
	import {
		DeviceModelResponse,
		DeviceParam,
	} from "@/repository/devicesRepository";
	import { useStore } from "vuex";
	import { ACTIONS, GETTER } from "@/store/deviceStore";
	import BasePagination from "@/repository/basePagination";
	import DuplicateDeviceForm from "@/components/duplicateDeviceForm.vue";
	import DeleteDeviceForm from "@/components/deleteDeviceForm.vue";

	export default defineComponent({
		setup() {
			let locking: boolean = false;
			const baseState = createBaseState();
			const store = useStore();
			const deviceState = reactive<{
				devices: DeviceModelResponse[],
				page: number,
				totalPage: number,
				pageNow: number,
				duplicateDeviceTarget: DeviceModelResponse | null,
				deleteDeviceTarget: DeviceModelResponse | null
			}>({
				duplicateDeviceTarget: null,
				devices: [],
				page: 0,
				totalPage: 0,
				pageNow: 1,
				deleteDeviceTarget: null
			});
			const deviceFormEl = ref<HTMLElement>();
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
			const setFormValue = (
				deviceData: DeviceModelResponse,
				isEdit: boolean = false
			) => {
				["is-invalid", "text-danger", "form-text"].forEach((d) => {
					Array.from(
						deviceFormEl.value?.getElementsByClassName(d) as Iterable<Element>
					).forEach((d) => {
						const tagName = d.tagName.toLocaleLowerCase();
						if (["input", "textarea"].includes(tagName))
							d.classList.remove("is-invalid");
						else if ("label" == tagName) d.classList.remove("text-danger");
						else if (d.classList.contains("form-text")) d.remove();
					});
				});

				let element: HTMLElement | undefined = deviceFormEl.value;
				if (element == undefined || element == null) return;
				(element.querySelector("[input-device-id]") as HTMLInputElement).value =
					deviceData.deviceId;
				if (isEdit) {
					(
						element.querySelector("[input-device-id]") as HTMLInputElement
					).disabled = true;
					(
						element.querySelector("[title-form]") as HTMLElement
					).textContent = `Edit device ${deviceData.deviceId}`;
				} else {
					(element.querySelector("[title-form]") as HTMLElement).textContent =
						"Tambah device";
					(
						element.querySelector("[input-device-id]") as HTMLInputElement
					).disabled = false;
				}
				(element.querySelector("[input-device-name]") as HTMLInputElement).value =
					deviceData.deviceName;
				(element.querySelector("[input-kalibrasi]") as HTMLInputElement).value =
					deviceData.defaultCalibration;
				(element.querySelector("[input-description]") as HTMLInputElement).value =
					deviceData.description;
				(element.querySelector("[input-precition]") as HTMLInputElement).value =
					deviceData.precision.toString();
				(element.querySelector("[input-device-id]") as HTMLInputElement).value =
					deviceData.deviceId;
				(element.querySelector("[input-interval]") as HTMLInputElement).value =
					deviceData.interval.toString();
				const params = baseParam.value;
				if (params != undefined && deviceData.deviceParams != null) {
					for (let i = 0; i < deviceData.deviceParams.length; i++) {
						const newParam = params.cloneNode(true) as HTMLElement;
						(newParam.querySelector("param-id") as HTMLInputElement).value =
							deviceData.deviceParams[i].paramId;
						(newParam.querySelector("param-value") as HTMLInputElement).value =
							deviceData.deviceParams[i].paramValue;
						params.insertBefore(params, newParam);
					}
				}
			};
			const getDataFrom = (): DeviceModelResponse | undefined => {
				let element: HTMLElement | undefined = deviceFormEl.value;
				if (element == undefined || element == null) return undefined;
				const data: DeviceModelResponse[] = deviceState.devices.filter(
					(d) =>
						d.deviceId ==
						(element?.querySelector("[input-device-id]") as HTMLInputElement)
							.value
				);
				let device: DeviceModelResponse | null = null;
				if (data.length > 0) device = data[0];
				let paramDataParent =
					baseParam.value?.parentElement?.getElementsByClassName("param-data");
				const deviceParams: DeviceParam[] = [];
				for (
					let index = 0;
					index <
					(paramDataParent?.length == undefined ? 0 : paramDataParent.length);
					index++
				) {
					if (paramDataParent != undefined) {
						const paramValue: DeviceParam = {
							paramId: validateForm(
								paramDataParent[index].querySelector(
									"[param-id]"
								) as HTMLInputElement
							),
							paramValue: validateForm(
								paramDataParent[index].querySelector(
									"[param-value]"
								) as HTMLInputElement
							),
						};
						deviceParams.push(paramValue);
					}
				}
				const deviceData: DeviceModelResponse = {
					createdAt: device?.createdAt || null,
					defaultCalibration: validateForm(
						element.querySelector("[input-kalibrasi]") as HTMLInputElement
					),
					description: validateForm(
						element.querySelector("[input-description]") as HTMLInputElement
					),
					deviceId: validateForm(
						element?.querySelector("[input-device-id]") as HTMLInputElement
					),
					deviceName: validateForm(
						element.querySelector("[input-device-name]") as HTMLInputElement
					),
					interval: parseInt(
						validateForm(
							element.querySelector("[input-interval]") as HTMLInputElement
						)
					),
					precision: parseInt(
						validateForm(
							element.querySelector("[input-precition]") as HTMLInputElement
						)
					),
					sensorResponses: device == null ? [] : device.sensorResponses,
					deviceParams: deviceParams,
				};
				return deviceData;
			};
			const addDeviceShow = () => {
				if (deviceFormEl.value?.classList.contains("d-none")) {
					deviceFormEl.value?.classList.remove("d-none");
				}
				setFormValue({
					createdAt: null,
					defaultCalibration: "x",
					description: "",
					deviceId: "",
					deviceName: "",
					interval: 3600,
					precision: 2,
					sensorResponses: null,
					deviceParams: [],
				});
			};
			const baseParam = ref<HTMLElement>();
			const addDeviceHide = () => {
				if (!deviceFormEl.value?.classList.contains("d-none")) {
					deviceFormEl.value?.classList.add("d-none");
				}
				const paramData =
					baseParam.value?.parentElement?.getElementsByClassName("param-data");
				for (let idx in paramData) {
					paramData.item(parseInt(idx))?.remove();
				}
			};
			const requestListDevice = async () => {
				if (locking) return;
				locking = true;
				try {
					if (
						(store.getters[
							GETTER.DEVICES
						] as BasePagination<DeviceModelResponse>) != null
					) {
						const data = store.getters[
							GETTER.DEVICES
						] as BasePagination<DeviceModelResponse>;
						deviceState.page = data.page;
						deviceState.totalPage = data.totalPage;
						deviceState.devices = data.data;
						return;
					}
					baseState.loadingEvent = true;
					const device = await store.dispatch(
						ACTIONS.LOAD_DEVICE,
						deviceState.pageNow
					);
					const devicePagination = device as BasePagination<DeviceModelResponse>;
					deviceState.page = devicePagination.page;
					deviceState.totalPage = devicePagination.totalPage;
					deviceState.devices = devicePagination.data;
				} catch (error) {
					console.log(error);
				} finally {
					baseState.loadingEvent = false;
					locking = false;
				}
			};
			onMounted(() => {
				requestListDevice();
			});
			const addParam = () => {
				const newNode = baseParam.value?.cloneNode(true) as HTMLElement;
				baseParam.value?.parentNode?.insertBefore(newNode, baseParam.value);
				newNode.classList.remove("d-none");
				newNode.classList.add("param-data");
				const removeNode = () => {
					newNode
						.getElementsByClassName("del-node")[0]
						.removeEventListener("click", removeNode);
					baseParam.value?.parentElement?.removeChild(newNode);
				};
				newNode
					.getElementsByClassName("del-node")[0]
					.addEventListener("click", removeNode);
			};
			const editDeviceBtn = (deviceId: string) => {
				const devices: DeviceModelResponse[] = deviceState.devices.filter(
					(d) => d.deviceId == deviceId
				);
				if (devices.length == 0) return;
				if (deviceFormEl.value?.classList.contains("d-none"))
					deviceFormEl.value?.classList.remove("d-none");
				setFormValue(devices[0] as DeviceModelResponse, true);
			};
			const duplicateDevice = (deviceId: string) => {
				deviceState.duplicateDeviceTarget = deviceState.devices.filter(
					(d) => d.deviceId == deviceId
				)[0];
			};
			const deleteDevice = (deviceId: string) => {
				deviceState.deleteDeviceTarget = deviceState.devices.filter(
					(d) => d.deviceId == deviceId
				)[0];
			};
			const saveButton = () => {
				console.log(getDataFrom());
			};
			const closeDuplicateForm = () => {
				deviceState.duplicateDeviceTarget = null;
			};

			return {
				baseState,
				deviceState,
				deviceFormEl,
				addDeviceShow,
				addDeviceHide,
				baseParam,
				addParam,
				editDeviceBtn,
				duplicateDevice,
				deleteDevice,
				saveButton,
				closeDuplicateForm,
			};
		},
		components: {
			SidebarComp,
			HeaderComp,
			ErrorComp,
			DuplicateDeviceForm,
			DeleteDeviceForm,
		},
	});
</script>
