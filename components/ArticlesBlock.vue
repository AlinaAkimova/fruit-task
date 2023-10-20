<template lang="pug">
.articlesBlock
  InfoCard(v-for="i in 5" class="articlesBlock__list")
</template>

<style lang="scss" scoped>
.articlesBlock {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
