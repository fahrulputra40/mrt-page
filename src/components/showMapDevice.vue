<template>
	<div class="container-form">
		<div class="container-wrapper">
			<div class="form-layout">
				<h6>Lokasi Device</h6>
				<div class="mt-3">
					<!-- <div class="wrapper-map-setting">
						<div class="guide-header">
							<p class="guide-map">Sumber data peta</p>
							<button class="btn">
								<i class="fa-solid fa-chevron-down"></i>
							</button>
						</div>
						<div class="mt-2">
							<form>
								<div>
									<label class="form-label">Longitude </label>
									<select class="form-select">
										<option selected disabled>Belum dipilih</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div class="mt-3">
									<label class="form-label">Longitude </label>
									<select class="form-select">
										<option selected disabled>Belum dipilih</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</form>
							<div class="guide-footer mt-4">
								<div class="row">
									<div class="col-md-8">
										<div class="w-100 alert alert-primary m-0" role="alert">
											Berhasil disimpan
										</div>
									</div>
									<div class="col-md-4 mt-3 mt-md-0">
										<button class="btn w-100">Simpan</button>
									</div>
								</div>
							</div>
						</div>
					</div> -->
				</div>
				<div class="mt-3">
					<iframe
						width="100%"
						height="400"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?q=-6.9034477,107.6018721&hl=es&z=14&amp;output=embed"
					>
					</iframe>
				</div>
                <div class="mt-3">
                    <button class="btn btn-mrt w-100" @click="closeMap">Close</button>
                </div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup(props, {emit}) {
        const closeMap = ()=>{
            emit("close")
        }
        return{
            closeMap
        }
    },
})
</script>
