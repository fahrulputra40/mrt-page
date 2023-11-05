<template>
    <div>
        <SidebarComp />
        <main class="dashboard">
        <HeaderComp />
        <section class="welcome">
            <h3>Selamat datang!</h3>
            <p>Dashboard Mertani on premise</p>
        </section>
        <section class="menu">
            <div class="menu-container">
                <h5>Shortcut</h5>
                <div class="row g-3">
                    <div class="col-12 col-md-6 col-lg-4">
                        <a href="" data-tilt>
                            <div class="icon">
                                <i class="fa-solid fa-satellite-dish"></i>
                            </div>
                            <span>Lihat daftar Device</span>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <a href="" data-tilt>
                            <div class="icon">
                                <i class="fa-solid fa-note-sticky"></i>
                            </div>
                            <span>Lihat sistem log</span>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <a href="" data-tilt>
                            <div class="icon">
                                <i class="fa-solid fa-desktop"></i>
                            </div>
                            <span>Lihat daftar service</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import SidebarComp from "../components/sidebarComp.vue";
import HeaderComp from "../components/headerComp.vue";

export default defineComponent({
    setup() {

    },
    components: {SidebarComp, HeaderComp}
})
</script>
