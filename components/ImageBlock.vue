<template lang="pug">
.imageBlock
  img(:src="data?.src" alt='image' class="imageBlock__image")
  p(class="imageBlock__caption") {{ data?.caption }}
</template>

<script setup>
defineProps({
  data: undefined,
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.imageBlock {
  margin: 70px auto;
  &__image {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
    max-height: 550px;
  }

  &__caption {
    text-align: right;
    color: $grey;
    @include font-info-thin;
  }
}
</style>
