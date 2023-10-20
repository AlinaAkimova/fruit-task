<template lang="pug">
article(class='articleIntro')
  img(src="/Rectangle.png" alt='image' class="articleIntro__image")
  section
    h1(class='articleIntro__title') Мир динамичного 3D Цифрового Искусства
    div(class='articleIntro__timeAndReaders')
      div(class="articleIntro__time") 13 мин время чтения
      div(class="articleIntro__readers") 360 прочитали статью
    p(class='articleIntro__shortInfo') Впечатляющий путь, где художническая креативность сливается с передовыми технологиями. Это искусство способно преобразить наше восприятие о том, что возможно в виртуальных мирах; как границы возможностей расширяются, и как велика сила человеческой фантазии, воплощенной в трехмерные шедевры
</template>
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
  }

  &__title {
    @include font-title;
    margin-bottom: 30px;
  }

  &__timeAndReaders {
    color: $grey;
    @include font-info-thin;
  }

  &__time::before {
    content: url("~/assets/icons/time.svg");
    align-items: center;
    margin: 0 3px 0 0;
  }

  &__readers::before {
    content: url("~/assets/icons/eye.svg");
    align-items: center;
    padding: 0;
    margin: 0 3px 0 0;
  }

  &__shortInfo {
    @include font-main-text;
  }
}
</style>
