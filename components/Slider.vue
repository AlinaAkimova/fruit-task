<template lang="pug">
swiper(class="swiper" :pagination="{type: 'fraction',}" :navigation="true" :modules="modules")
    swiper-slide(class="swiper__slide") Slide 1
    swiper-slide(class="swiper__slide") Slide 2
    swiper-slide(class="swiper__slide") Slide 3
    swiper-slide(class="swiper__slide") Slide 4
</template>

<script>
import { defineComponent } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 400px;
  margin: 100px 0;

  &__slide {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
}
</style>
