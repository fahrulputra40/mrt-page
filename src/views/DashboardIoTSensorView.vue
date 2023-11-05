<template>
	<div>
		<sidebar-comp />
		<main class="dashboard">
			<header-comp />
			<section class="welcome breadcrum">
				<section>
					<h3>Sensor Device</h3>
					<p>Sensor dari device MTI-XXXXXXXXXXXXXX</p>
				</section>
				<ul>
					<li>Device</li>
					<li>Sensor Device</li>
				</ul>
			</section>
			<section class="dashboard-body">
				<div class="card">
					<div class="card-loading"></div>
					<div class="card-body">
						<section class="position-relative title">
							<h6 class="table-title">Ringkasan Sensor</h6>
							<button class="btn btn-mrt d-block me-0 ms-auto">
								Sensor Device
							</button>
							<SensorForm />
						</section>
					</div>
					<div class="card-body mt-3">
						<section class="position-relative title">
							<h6 class="table-title">Pengaturan Lokasi</h6>
							<button
								class="btn btn-mrt d-block me-0 ms-auto"
								@click="sensorDevice.mapPopup = true"
							>
								Lihat lokasi device
							</button>
							<ShowMapDevice
								v-if="sensorDevice.mapPopup"
								@close="sensorDevice.mapPopup = false"
							/>
						</section>
					</div>
					<div class="card-body mt-3">
						<h6 class="chart-title">Sensor Data</h6>
						<div
							class="chart-ctr d-flex justify-content-end align-items-center"
						>
							<div class="dataset-selector me-3 position-relative">
								<button class="btn">Filter tanggal</button>
								<div class="calendar-wrapper d-none">
									<div class="cal-page">
										<div class="mb-3 position-relative">
											<label class="form-label">Dari</label>
											<input
												type="text"
												class="form-control"
												placeholder="12-November-2010 10:10"
											/>
											<div class="calendar-pos">
												<div mrt-calendar></div>
											</div>
										</div>
										<div class="mb-3">
											<label class="form-label">Sampai</label>
											<input
												type="text"
												class="form-control"
												placeholder="12-November-2010 10:10"
											/>
										</div>
										<div class="mb-3">
											<button
												class="btn btn-mrt d-block"
												style="margin-left: auto"
											>
												Filter
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="dataset-selector">
								<div class="dropdown d-inline-block">
									<button
										class="btn dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-mdb-toggle="dropdown"
										aria-expanded="false"
									>
										Pilih sensor
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton"
									>
										<li>
											<a class="dropdown-item" href="#">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="Checkme1"
													/>
													<label class="form-check-label" for="Checkme1"
														>Check me</label
													>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="Checkme2"
														checked
													/>
													<label class="form-check-label" for="Checkme2"
														>Check me</label
													>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="Checkme3"
													/>
													<label class="form-check-label" for="Checkme3"
														>Check me</label
													>
												</div>
											</a>
										</li>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="Checkme4"
														checked
													/>
													<label class="form-check-label" for="Checkme4"
														>Check me</label
													>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="chart-wrapper mt-3">
							<div class="scrollable-chart">
								<canvas id="myChart"></canvas>
							</div>
						</div>
						<div class="table-container mt-5">
							<div class="table-scroll">
								<div class="table-wrap">
									<table class="table tb-sensor">
										<thead class="table-mrt">
											<tr>
												<th scope="col" class="no">No</th>
												<th scope="col" class="tgl">Tanggal</th>
												<th scope="col" class="sens">Sensor 1</th>
												<th scope="col" class="sens">Sensor 2</th>
												<th scope="col" class="sens">Sensor 3</th>
												<th scope="col" class="sens">Sensor 4</th>
												<th scope="col" class="sens">Sensor 5</th>
												<th scope="col" class="sens">Sensor 6</th>
												<th scope="col" class="sens">Sensor 7</th>
												<th scope="col" class="sens">Sensor 8</th>
												<th scope="col" class="sens">Sensor 9</th>
												<th scope="col" class="sens">Sensor 10</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>10 Januari 1998 11:00:00</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>10 Januari 1998 11:00:00</td>
												<td>MTI-XXXX</td>
												<td>MTI-XXXX</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td>10 Januari 1998 11:00:00</td>
												<td>MTI-XXXX</td>
												<td>MTI-XXXX</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
												<td>Sensor 1</td>
												<td>Sensor 2</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="table-footer">
								<p>Halaman 1 dari 10</p>
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
	</div>
</template>

<script lang="ts">
	import HeaderComp from "@/components/headerComp.vue";
	import sidebarComp from "@/components/sidebarComp.vue";
	import SensorForm from "@/components/sensorForm.vue";
	import ShowMapDevice from "@/components/showMapDevice.vue";
	import {
		SensorData,
		SensorRecordModelRequest,
	} from "@/repository/devicesRepository";
	import { defineComponent, onMounted, reactive } from "vue";
	import { useStore } from "vuex";
	import { useRoute, useRouter } from "vue-router";
	import { ACTIONS, SENSOR_DEVICE_DATA } from "@/store/deviceStore";
import ErrorModel from "@/helper/baseErrorModel";

	export default defineComponent({
		components: { sidebarComp, HeaderComp, ShowMapDevice, SensorForm },
		setup() {
			const sensorDevice = reactive<{
				sensorsDevice: SensorData[];
				page: number;
				total: number;
				pageNow: number;
				deviceId: string;
				mapPopup: boolean;
				firstLoad: boolean;
			}>({
				page: 0,
				pageNow: 1,
				sensorsDevice: [],
				total: 0,
				deviceId: "",
				mapPopup: false,
				firstLoad: true,
			});
			const store = useStore();
			const route = useRoute();
            const router = useRouter();

			onMounted(async () => {
				try {
					const now = new Date(Date.now());
					const request: SensorRecordModelRequest = {
						total: 50,
						page: 1,
						deviceId: route.params["id"] as string,
						dateFrom: now,
						dateTo: now,
					};
					const data: SENSOR_DEVICE_DATA = await store.dispatch(
						ACTIONS.LOAD_SENSOR,
						request
					);
					console.log(data);
				} catch (e) {
					const error = e as ErrorModel;
                    if(error.statusCode == "01")router.push({
                        path: "/login",
                        query: {
                            err: btoa(error.message)
                        }
                    })
				}
			});
			return {
				sensorDevice,
			};
		},
	});
</script>
