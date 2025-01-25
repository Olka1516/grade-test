<template>
  <div class="review">
    <div class="review-content">
      <div class="content-info">
        <img src="@/assets/google.svg" alt="" />
        <p>{{ t("customersReviews") }}</p>
      </div>
      <div class="content-info info">
        <div class="content-info">
          <strong>{{ mark }}</strong>
          <div class="content-stars">
            <img
              v-for="(star, index) in stars()"
              :key="index"
              :src="getStarSrc(star)"
              alt="star"
            />
          </div>
        </div>
        <span>
          {{ t("review", reviews) }}
        </span>
      </div>
    </div>
    <div class="content-btns">
      <a href="https://www.google.com/" class="border-button">{{
        t("buttons.review")
      }}</a>
      <button @click="changeShowModalValue">{{ t("buttons.write") }}</button>
      <Teleport to="body">
        <BaseModal :show="showModal" @close="changeShowModalValue" />
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseModal from "@/components/BaseModal.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{ mark: number; reviews: number }>();

const showModal = ref(false);
const stars = () => {
  const fullStars = Math.floor(props.mark);
  const hasHalfStar = props.mark % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return [
    ...Array(fullStars).fill(1),
    ...(hasHalfStar ? [0.5] : []),
    ...Array(emptyStars).fill(0),
  ];
};

const getStarSrc = (star: number) => {
  if (star === 1) return getImage("star_full");
  if (star === 0.5) return getImage("star_half_full");
  return getImage("star_empty");
};

const getImage = (name: string) => {
  const st = new URL(`../assets/${name}.svg`, import.meta.url);
  return st.href;
};

const changeShowModalValue = () => {
  showModal.value = !showModal.value;
};
</script>

<style scoped lang="scss">
@use "@/styles/index";
@include index.review;
</style>
