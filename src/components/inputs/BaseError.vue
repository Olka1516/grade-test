<template>
  <div class="error">
    <span v-if="isError()">
      <small class="text-error">{{ getError() }}</small>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessageEnum } from "@/types";
import type { ErrorObject } from "@vuelidate/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  v: {
    $error: boolean;
    $dirty: boolean;
    $errors: ErrorObject[];
    $path: string;
  };
}>();

const isError = () => {
  return props.v.$error && props.v.$dirty;
};

const { EmailIsNotValid, IsRequired } = ErrorMessageEnum;

const getError = () => {
  const { $message: message } = props.v.$errors?.[0] ?? { $message: null };
  switch (props.v.$path) {
    case "email":
      if (message === EmailIsNotValid) return t("errors.emailIsNotValid");
      else if (message === IsRequired) return t("errors.isRequired");
      break;
    case "text":
      if (message === IsRequired) return t("errors.isRequired");
      break;
  }
};
</script>
<style lang="scss" scoped>
@use "@/styles/index";
@include index.errors;
</style>
