<template lang="pug">
.article
  NuxtLayout
    component(v-for="block in article" :key="block.id" :is="components[block.type]" :data="block.data")
</template>

<script setup>
import { useArticleStore } from "~/store/article";
const components = {
  article_intro_block: resolveComponent("ArticleIntroBlock"),
  text_block: resolveComponent("TextBlock"),
  image_block: resolveComponent("ImageBlock"),
  slider_block: resolveComponent("Slider"),
  subscribe_form_block: resolveComponent("Subscription"),
  cta_form_block: resolveComponent("CtaForm"),
  article_list_block: resolveComponent("ArticlesBlock"),
};

const route = useRoute();
const store = useArticleStore();

const { article } = storeToRefs(store);

await store.fetchArticle(route.path);

useSeoMeta({
  title: store.meta.title,
  description: store.meta.description,
});
</script>
