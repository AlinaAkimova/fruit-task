<template lang="pug">
Swiper(:pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="swiper")
  SwiperSlide(class="swiper__slide" v-for="item in data" :key="item")
    img(:src="item" class="swiper__image")
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

const modules = ref([Pagination, Navigation]);
defineProps({
  data: {}, // object because we get Proxy from Array
});
</script>

<style lang="scss">
@import "swiper/scss";
@import "swiper/scss/pagination";
@import "swiper/scss/navigation";
@import "~/assets/scss/main.scss";

.swiper {
  .swiper-button-prev,
  .swiper-button-next {
    background-color: $black;
    color: $white;

    position: absolute;

    width: 60px;
    height: 60px;

    @media (max-width: 1200px) {
      width: 45px;
      height: 45px;
    }

    @media (max-width: 800px) {
      width: 25px;
      height: 25px;
    }

    &::after {
      content: "";
      width: 25%;
      height: 25%;
      border-top: 3px solid $white;
      border-right: 3px solid $white;
    }
  }

  .swiper-button-next {
    right: 0;
    &::after {
      margin-right: 3px;
      transform: rotate(45deg);
    }
  }

  .swiper-button-prev {
    left: 0;
    &::after {
      margin-left: 3px;
      transform: rotate(-135deg);
    }
  }
}
</style>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  margin: 100px 0;

  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  &__image {
    width: 100%;
    display: block;
    object-fit: contain;
    padding: 0 100px 45px 100px;
  }
}
</style>
