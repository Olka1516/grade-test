<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <button class="modal-exit" @click="emit('close')">
          <img src="@/assets/exit.svg" alt="" />
        </button>
        <div class="modal-header">
          <h2>{{ t("contact") }}</h2>
        </div>
        <div class="modal-body">
          <div class="field">
            <BaseText v-model="data.email" :v="v$.email" type="email" />
            <BaseError :v="v$.email" />
          </div>
          <div class="field">
            <BaseText v-model="data.text" :v="v$.text" type="answer" />
            <BaseError :v="v$.text" />
          </div>
        </div>
        <div class="modal-footer">
          <button @click="submit">{{ t("buttons.submit") }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
import { email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import BaseText from "./inputs/BaseText.vue";
import BaseError from "./inputs/BaseError.vue";
import { addUserAnswers } from "@/services";

const { t } = useI18n();
defineProps({
  show: Boolean,
});

const emit = defineEmits<{
  (e: "close"): void;
}>();

const data = reactive({
  email: "",
  text: "",
});

const rules = {
  email: { required, email },
  text: { required },
};

const v$ = useVuelidate(rules, data);
const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) {
    return;
  }
  try {
    await addUserAnswers(data);
    emit("close");
  } catch {
    console.log("error");
  }
};
</script>

<style scoped lang="scss">
@use "@/styles/index";
@include index.modal;
</style>
