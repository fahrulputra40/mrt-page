<template>
        <div class="header-container" :class="{scroll: data.scrolling}">
            <header>
                <button class="btn btn-sidebar-toggle" @click="collabseBtn">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
                <ul class="right-header">
                    <li>
                        <div class="profile" @click="userMenuClick">
                            <div class="avatar">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <ul class="profile-menu" :class="{'d-none': !userMenuShow}">
                                <li class="profile-name">
                                    <span>Admin Mertani</span>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-user profile-icon"></i>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="" @click="logout">
                                        <i class="fa-solid fa-arrow-right-from-bracket profile-icon"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
</template>

<script lang="ts">
import { ACTIONS, GETTER } from '@/store/modelStore';
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';
import {  useStore } from 'vuex';

export default defineComponent({
    setup() {
        const data = reactive({
            scrolling: false
        });
        const store = useStore();
        const {cookies} = useCookies();
        const router = useRouter()
        const userMenuShow = computed(()=>store.getters[GETTER.MARKER])
        const userMenuClick = ()=>{
            store.dispatch(ACTIONS.MARKER, true);
        }
        const collabseBtn = ()=>{
            // if(window.innerWidth <= 997) store.commit("toggleSidebarShow")
        }
        const onScroll = ()=>{
            let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
            if(scrollTop > 5){
                data.scrolling = true;
            }else
                data.scrolling = false;    
        }
        const logout = (e:Event)=>{
            e.preventDefault();
            cookies.remove("token");
            router.push("/login");
        }


        onMounted(()=>{
            onScroll();
            document.addEventListener("scroll", onScroll);
        })
        onBeforeUnmount(()=>{
            document.removeEventListener("scroll", onScroll);
        })

        return{
            userMenuClick,
            data,
            collabseBtn,
            logout,
            userMenuShow
        }
    },
})
</script>
