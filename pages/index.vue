<template lang="pug">
NuxtLayout
  ArticlesBlock(:articles="article[0].data.articles")
</template>

<script setup>
import { useArticleStore } from "~/store/article";

const store = useArticleStore();
const { meta, article } = storeToRefs(store);
await store.fetchArticle("/");
</script>
