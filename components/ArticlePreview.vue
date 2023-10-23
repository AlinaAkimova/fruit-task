<template lang="pug">
.articlePreview
  img(:src="article?.image" alt='article image' class="articlePreview__image")
  h3 {{ article?.title }}
  button(class="articlePreview__button" @click="navigate(article?.link)") Читать
</template>

<script setup>
defineProps({
  article: undefined,
});

const navigate = (link) => {
  console.log(link);
  navigateTo(link, { external: true });
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.articlePreview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &__image {
    max-width: $article-preview-width;
    width: 100%;

    max-height: 320px;
    height: 100%;

    @media (max-width: 800px) {
      max-width: $article-preview-small-width;
    }
  }

  &__button {
    @include font-main-text;

    box-sizing: border-box;

    background-color: $black;
    color: $white;

    border-radius: 2px;
    border: none;
    padding: 10px 50px;

    cursor: pointer;
  }

  &__button:hover {
    background-color: $blue;
  }
}
</style>
