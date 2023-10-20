<template lang="pug">
.articlePreview
    img(src='/Rectangle.png' alt='img')
    h3 Мир динамичного 3Д искусства
    button(class="articlePreview__button" @click="()=>navigateTo(`/article${id}`)") Читать
</template>

<script setup>
const image = "";
const title = "";
const { data: count } = await useFetch(
  "https://devtwit8.ru/api/v1/page/?path=/article-1",
);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.articlePreview {
  margin-bottom: 30px;
  &__button {
    @include font-main-text;
    background-color: $black;
    color: $white;

    border-radius: 2px;
    border: none;
    padding: 10px 50px;
  }
}
</style>
