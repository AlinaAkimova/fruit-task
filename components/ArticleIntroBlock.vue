<template lang="pug">
article(class='articleIntro')
  img(:src="data?.image" alt='image' class="articleIntro__image")
  section
    h1(class='articleIntro__title') {{ data?.title }}
    div(class='articleIntro__timeAndReaders')
      div(class="articleIntro__time") {{ data?.reading_time }} мин время чтения
      div(class="articleIntro__readers") {{ data?.views_count }} прочитали статью
    p(class='articleIntro__shortInfo') {{ data?.short_description }}
</template>

<script setup>
defineProps({
  data: undefined,
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.articleIntro {
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  &__image {
    margin-right: 30px;
    border-radius: 0 50% 0 0;
    max-width: 540px;
    width: 100%;

    @media (max-width: 1250px) {
      max-width: 50%;
    }

    @media (max-width: 850px) {
      max-width: 100%;
      max-height: 450px;
      height: 100%;
    }
  }

  &__title {
    @include font-title;
    margin-bottom: 30px;

    @media (max-width: 850px) {
      margin-bottom: 10px;
    }
  }

  &__timeAndReaders {
    color: $grey;
    @include font-info-thin;
  }

  &__time,
  &__readers {
    display: flex;
    align-items: center;
  }

  &__time::before {
    content: url("~/assets/icons/time.svg");
    align-items: center;
    margin: 0 5px 0 0;
    padding-top: 3px;
  }

  &__readers::before {
    content: url("~/assets/icons/eye.svg");
    margin: 0 5px 0 0;
    padding-top: 3px;
  }

  &__shortInfo {
    @include font-main-text;
    margin-top: 50px;

    @media (max-width: 850px) {
      margin-top: 20px;
    }
  }
}
</style>
