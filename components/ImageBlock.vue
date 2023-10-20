<template lang="pug">
.imageBlock
  img(src="/imageBlock.png" alt='image' class="imageBlock__image")
  p(class="imageBlock__imageDesc") Опубликовано 20.08.2022, Unsplash
</template>
<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.imageBlock {
  margin: 70px auto;
  &__image {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
  }

  &__imageDesc {
    text-align: right;
    width: 15%;
    color: $grey;
    @include font-info-thin;
  }
}
</style>
