<template lang="pug">
swiper(class="swiper" :modules="modules" :pagination="{ clickable: true }" navigation)
    swiper-slide(class="slide") Slide 1
    swiper-slide(class="slide") Slide 2
    swiper-slide(class="slide") Slide 3
    swiper-slide(class="slide") Slide 4
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
}

.slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>
