<template>
    <div :class="{'mkr': markerState}">
      <div class="mkr-page"  @click="markerClick"></div>
      <router-view/>
    </div>
</template>

<style lang="scss">
  @import "@/style/index.scss";
</style>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { ACTIONS, GETTER } from './store/modelStore';

export default defineComponent({
  setup() {
    const store = useStore();
    const markerState = computed(()=>store.getters[GETTER.MARKER])
    const markerClick = ()=>{
      store.dispatch(ACTIONS.MARKER, false);
    }
    return{
      markerState,
      markerClick
    }
  },
})
</script>
