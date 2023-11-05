<template>
  <div class="error-page">
    <div class="error-wrapper hide" ref="alertEl">
      <div class="alert alert-danger" role="alert">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="ms-2">Jaringan bermasalah</span>
        <button type="button" class="btn-close" @click="hideAlert" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const alertEl = ref<HTMLElement>();
        const hideAlert = ()=>{
            if(!alertEl.value?.classList.contains("hide")){
                alertEl.value?.classList.add("hide");
            }
        }
        return{
            alertEl,
            hideAlert
        }
    },
})
</script>


<style lang="scss" scoped>
.error-page {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding-bottom: 25px;

  .error-wrapper {
    position: relative;
    margin: auto;
    width: 600px;
    transition:  .5s;
    max-width: 600px;
    bottom: 0;
    @media screen and (max-width: 970px) {
      max-width: 100%;
      padding: 0 16px;
    }
    &.hide{
        bottom: -100px;
    }

    button{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .alert {
        position: relative;
        *{
        color: #842029;
        }
    }
  }
}
</style>
