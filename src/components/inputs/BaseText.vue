<template>
  <input
    required
    v-model="userInfo"
    @input="handleInput($event)"
    :class="{ invalid: isInfoInvalid() }"
    :placeholder="t(`inputTexts.${type}`)"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  modelValue: string;
  type: string;
  v: {
    $invalid: boolean;
    $dirty: boolean;
    $touch: Function;
  };
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: string): void;
}>();

const userInfo = ref(props.modelValue);

const handleInput = (event: Event) => {
  props.v.$touch();
  const target = event.target as HTMLInputElement;
  if (!target) return;
  userInfo.value = target.value;
  emit("update:modelValue", target.value);
};

const isInfoInvalid = () => {
  return props.v.$invalid && props.v.$dirty;
};
</script>
<style scoped lang="scss">
@use "@/styles/index";
@include index.field;
</style>
