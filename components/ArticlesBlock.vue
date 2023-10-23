<template lang="pug">
h2(class="title") {{data?.title}}
.articlesBlock
  ArticlePreview(
    v-for="article in articles"
    :key="article.title"
    :article="article"
  )
  ArticlePreview(
    v-for="article in data?.articles"
    :key="article.title"
    :article="article"
  )
</template>

<script setup>
defineProps({
  articles: [],
  data: undefined,
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.title {
  @include font-subtitle-text;
}
.articlesBlock {
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(auto-fill, $article-preview-width);
  justify-content: center;
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, $article-preview-small-width);
    gap: 15px;
  }
}
</style>
