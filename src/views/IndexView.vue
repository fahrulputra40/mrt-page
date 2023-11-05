<template>
  <div class="page-booting">
    <div class="logo-wrapper">
      <div class="page-logo d-flex justify-content-center align-items-center">
        <img src="../assets/logo-mertani-black2.png" alt="Logo" />
      </div>
      <div class="page-loader mt-3">
        <div class="loader-el"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/constant";
.page-booting {
  background-color: $bg-primary;
  position: relative;
  width: 100vw;
  height: 100vh;
  .logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .page-logo {
      width: 160px;
      height: 160px;
      border-radius: 1000px;
      box-shadow: 0px 0px 7px 3px rgb(218 228 243 / 65%);
      img {
        width: 70px;
        display: block;
      }
    }
    .page-loader {
      height: 3px;
      width: 100%;
      border-radius: 3px;
      position: relative;
      .loader-el {
        @keyframes loader-action {
          0% {
            width: 0;
            left: 0;
            right: unset;
            background-color: red;
          }
          100% {
            width: 100%;
            left: 0;
            right: unset;
            background-color: yellow;
          }
        }
        height: 100%;
        position: absolute;
        animation: loader-action 5s infinite;
      }
    }
  }
}
</style>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import {ACTIONS} from "@/store/modelStore";
import {  useRoute, useRouter } from 'vue-router';
export default {
    setup() {
      const router = useRouter();
      const route = useRoute()
      onMounted(async () => {
       try{
          const store = useStore()
          await store.dispatch(ACTIONS.LOAD_USER);
          router.push(route.query.from == undefined || route.query.from == "" || route.query.from == "/login" ? "/dashboard" : route.query.from);
       }catch(e){
          router.push("/login")
       }
      })
    },
}
</script>
