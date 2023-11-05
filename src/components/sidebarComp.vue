<template>
    <div class="sidebar max-height" >
        <div class="sidebar-header">
            <div class="logo">
                <img src="../assets/logo-mertani-black2.png" alt="Logo">
                <p>Mertani</p>
            </div>
        </div>
        <div class="sidebar-body">
            <ul>
                <li class="sidebar-title">Menu</li>
                <li class="sidebar-menu" :class="{'active': router.name == 'dashboard'}">
                    <router-link to="/dashboard">
                        <i class="sidebar-icon fa-solid fa-house"></i>
                        Beranda
                    </router-link>
                </li>
                <li class="sidebar-menu" :class="{'active': router.name == 'dashboard-iot' || router.name == 'dashboard-sensor'}">
                    <router-link to="/dashboard-iot">
                        <i class="sidebar-icon fa-solid fa-satellite-dish"></i>
                        Daftar Device IoT
                    </router-link>
                </li>
                <li class="sidebar-menu">
                    <a href="#">
                        <i class="sidebar-icon fa-solid fa-users"></i>
                        Daftar Pengguna
                    </a>
                </li>
                <li class="sidebar-menu">
                    <a href="#">
                        <i class="sidebar-icon fa-solid fa-note-sticky"></i>
                        Sistem Log
                    </a>
                </li>
                <li class="sidebar-menu">
                    <a href="#">
                        <i class="sidebar-icon fa-solid fa-square-poll-vertical"></i>
                        Laporan SLA
                    </a>
                </li>
                <li class="sidebar-menu">
                    <a href="#">
                        <i class="sidebar-icon fa-solid fa-desktop"></i>
                        Daftar Service
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
// :style="{'display': store.getters.getSidebarShow ? 'block':'none'}"
export default defineComponent({
    setup() {
        const router = useRoute();
        return{
            router
        }
    },
})
</script>
