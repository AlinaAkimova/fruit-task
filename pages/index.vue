<template lang="pug">
NuxtLayout
  ArticlesBlock(:data="article[0]?.data")
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useArticleStore } from "~/store/article";

const store = useArticleStore();
const { article } = storeToRefs(store);

await store.fetchArticle("/");

useSeoMeta({
  title: store.meta.title,
  description: store.meta.description,
});
</script>
