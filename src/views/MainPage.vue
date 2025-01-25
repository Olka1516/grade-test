<template>
  <BaseLoading v-if="loading" />

  <div v-else class="container">
    <div class="main-lang">
      <button
        v-for="lang in langs"
        :class="{ 'border-button': isSelected(lang) }"
        @click="changeLang(lang)"
      >
        {{ lang }}
      </button>
    </div>
    <BaseReview
      v-if="data.length"
      v-for="review in data"
      :mark="review.mark"
      :reviews="review.reviews"
    ></BaseReview>
    <div v-else>
      <h2>{{ t("empty") }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseLoading from "@/components/BaseLoading.vue";
import BaseReview from "@/components/BaseReview.vue";
import { getAllData } from "@/services";
import type { IReview } from "@/types";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const loading = ref(true);
const data = ref<IReview[]>([]);
const langs = ref(["ua", "en"]);

const selectedLang = ref("ua");

const changeLang = (lang: string) => {
  selectedLang.value = lang;
  locale.value = lang;
};

const isSelected = (lang: string) => {
  return lang === selectedLang.value;
};

onMounted(async () => {
  data.value = await getAllData();
  loading.value = false;
});
</script>

<style scoped lang="scss">
@use "@/styles/index";
@include index.main-page;
</style>
