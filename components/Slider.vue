<template lang="pug">
Swiper(:pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="swiper")
  SwiperSlide(class="swiper__slide" v-for="item in data")
    img(:src="item" class="swiper__image")
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = ref([Pagination, Navigation]);
defineProps({
  data: [],
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 620px;
  margin: 100px 0;

  &__slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  &__image {
    width: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
