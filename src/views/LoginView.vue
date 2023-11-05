<template>
  <div class="bg-body-el">
    <div class="container max-height flex-center">
      <div style="width: fit-content; background-color: #fff">
        <div
          class="card-loading"
          :class="{ 'd-block': baseState.loadingEvent }"
        ></div>
        <div class="login-form">
          <div>
            <img
              src="../assets/logo-mertani-black2.png"
              style="width: 54px; display: inline"
              alt="logo"
            />
            <p class="logo-name">Mertani</p>
          </div>
          <h1 class="title">
            Halo, Selamat datang di dashboard Mertani on premise
          </h1>
          <p class="desc">Login untuk memulai</p>
          <form>
            <div class="mb-3">
              <input
                type="email"
                v-model="data.email"
                class="form-control"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 position-relative">
              <input
                :type="data.eyeState ? 'text' : 'password'"
                class="form-control"
                placeholder="Password"
                v-model="data.password"
              />
              <i
                class="form-icon fa-solid"
                :class="{
                  'fa-eye': data.eyeState,
                  'fa-eye-slash': !data.eyeState,
                }"
                @click="eyeClick"
              ></i>
            </div>
            <button type="submit" class="btn" @click="loginCb">Login</button>
          </form>
          <div
            class="alert alert-danger d-flex align-items-center"
            :class="{ 'd-none': baseState.alertMessage == '' }"
            role="alert"
          >
            <i
              class="fa-solid fa-triangle-exclamation"
              style="color: var(--bs-alert-color)"
            ></i>
            <div style="margin-left: 10px; color: var(--bs-alert-color)">
              {{ baseState.alertMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseStateHelper from "@/helper/baseStateHelper";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ACTIONS } from "@/store/modelStore";
import ErrorModel, { convertToErrorModel } from "@/helper/baseErrorModel";

export default defineComponent({
  setup() {
    const data = reactive({
      email: "",
      password: "",
      eyeState: false,
    });
    const baseState = BaseStateHelper();
    const router = useRouter();
    const store = useStore();

    let locking: boolean = false;

    const loginCb = async (e: Event) => {
      e.preventDefault();
      baseState.alertMessage = "";
      if (locking) return;
      locking = true;
      baseState.loadingEvent = true;
      try {
        await store.dispatch(ACTIONS.LOGIN, {
          email: data.email,
          password: data.password
        })
        router.push("/dashboard");
      } catch (e: any) {
        const errorModel:ErrorModel = convertToErrorModel(e);
        baseState.alertMessage = errorModel.message;
      } finally {
        baseState.loadingEvent = false;
        locking = false;
      }
    };

    const eyeClick = () => {
      data.eyeState = !data.eyeState;
    };

    return {
      data,
      loginCb,
      baseState,
      eyeClick,
    };
  },
});
</script>
