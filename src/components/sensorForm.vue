<template>
	<div class="container-form">
		<div class="container-wrapper">
			<div class="form-layout">
				<h6>Sensor Device</h6>
				<div class="sensor-form">
					<div class="form-section">
						<div class="form-section-title">
							<span class="number">
								<span>1</span>
							</span>
							<h6>List Sensor</h6>
						</div>
						<ul class="row-show" >
						<!-- <ul> -->
                            <li class="d-none">
								<div class="comp">
									<span class="float-start sensor-name clearfix">Sensor</span>
									<div class="sensor-ctr">
										<button class="btn">
											<i class="fa-solid fa-trash"></i>
										</button>
										<button class="btn">
											<i class="fa-solid fa-chevron-down"></i>
										</button>
									</div>
								</div>
								<div class="comp">
									<div class="mb-3">
										<label class="form-label">Sensor ID</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Nama Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Deskripsi Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Kalibrasi</label>
										<input type="text" class="form-control" />
									</div>
								</div>
							</li>
							<li>
								<div class="comp">
									<span class="float-start sensor-name clearfix">Sensor</span>
									<div class="sensor-ctr">
										<button class="btn">
											<i class="fa-solid fa-trash"></i>
										</button>
										<button class="btn">
											<i class="fa-solid fa-chevron-down"></i>
										</button>
									</div>
								</div>
								<div class="comp">
									<div class="mb-3">
										<label class="form-label">Sensor ID</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Nama Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Deskripsi Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Kalibrasi</label>
										<input type="text" class="form-control" />
									</div>
								</div>
							</li>
							<li class="showw">
								<div class="comp">
									<span class="float-start sensor-name clearfix"
										>Sensor Dev</span
									>
									<div class="sensor-ctr">
										<button class="btn">
											<i class="fa-solid fa-trash"></i>
										</button>
										<button class="btn">
											<i class="fa-solid fa-chevron-down"></i>
										</button>
									</div>
								</div>
								<div class="comp">
									<div class="mb-3">
										<label class="form-label">Sensor ID</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Nama Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Deskripsi Sensor</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Kalibrasi</label>
										<input type="text" class="form-control" />
									</div>
								</div>
							</li>
							<li class="action">
								<button class="btn d-block">Tambah Sensor</button>
								<button class="btn d-block mt-3">Lanjut</button>
							</li>
							<li class="spacingg"></li>
						</ul>
						<div class="form-section-title">
							<span class="number">
								<span>2</span>
							</span>
							<h6>Opsional</h6>
						</div>
						<ul class="">
							<li>
								<div class="mb-3">
									<label class="form-label">Baterai Sensor</label>
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected hidden>Pilih Sensor</option>
										<option value="1">BB</option>
										<option value="2">CC</option>
										<option value="3">DD</option>
									</select>
								</div>
								<div class="mb-3">
									<label class="form-label">Sinyal Sensor</label>
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected hidden>Pilih Sensor</option>
										<option value="1">BB</option>
										<option value="2">CC</option>
										<option value="3">DD</option>
									</select>
								</div>
								<div class="mb-3">
									<label class="form-label">Data Longitude</label>
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected hidden>Pilih Sensor</option>
										<option value="1">BB</option>
										<option value="2">CC</option>
										<option value="3">DD</option>
									</select>
								</div>
								<div class="mb-3">
									<label class="form-label">Data Latitude</label>
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected hidden>Pilih Sensor</option>
										<option value="1">BB</option>
										<option value="2">CC</option>
										<option value="3">DD</option>
									</select>
								</div>
							</li>
							<li class="action">
								<button class="btn d-block mt-3">Lanjut</button>
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
							<button class="btn">Tutup</button>
							<button class="btn btn-mrt">Simpan</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>