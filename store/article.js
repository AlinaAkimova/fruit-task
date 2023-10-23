export const useArticleStore = defineStore("article-store", {
  state: () => ({
    meta: {},
    article: [],
  }),
  actions: {
    async fetchArticle(path) {
      const { data } = await useFetch(`${process.env.BASE_API_URL}${path}`);
      if (data.value) {
        this.meta = data.value.meta;
        this.article = [...data.value.body];
      }
    },
  },
});
