<template lang="pug">
.infoCard
    img(src='/Rectangle.png' alt='img')
    h3 Мир динамичного 3Д искусства
    button(class="infoCard__button" @click="routerToArticle()") Читать
</template>

<script setup>
const image = '';
const title = '';
const routerToArticle = () => {
    navigateTo(`/article${id}`)
}
const { data: count } = await useFetch('https://devtwit8.ru/api/v1/page/?path=/article-1')
</script>

<style scoped lang="scss">
@import "~/assets/scss/main.scss";
.infoCard {
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
