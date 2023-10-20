<template lang="pug">
.textBlock
  h2(class="textBlock__title") Слияние Искусства и Технологии
  p(class="textBlock__list") Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.
  blockquote(class="textBlock__blockquote")
    p(class="textBlock__blockquoteText") «Медиахудожник работает с современным искусством. Слово „медиа“ появляется, потому что он работает в новых формах. Медиа как пространство, в котором может существовать произведение. Например, холст, покрытый красками, или превращённый в скульптуру камень — это старые медиа. Компьютер и игры на нём — новые медиа. 
    footer(class="textBlock__author") Ярослав Кравцов, основатель студии «Мастерская 15»
  h3(class="textBlock__subtitle") Будущее Динамичного 3D Цифрового Искусства
  ul(class="textBlock__list")
    li Роль в развлекательной индустрии (фильмы, игры, анимация)
    li Дизайн интерьера и архитектурная визуализация
    li Применение в медицинском моделировании и образовании
  p(class="textBlock__list") Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.
</template>
<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.textBlock {
  width: 70%;

  margin-left: auto;
  margin-right: auto;

  &__title {
    @include font-subtitle-text;
  }

  &__subtitle {
    @include font-info-bold;
  }

  &__blockquoteText {
    @include font-italic-text;
    color: $lightBlack;
  }

  &__author {
    @include font-info-thin;
    color: $grey;
  }

  &__blockquote {
    display: flex;
    flex-direction: column;
  }

  &__blockquote::before {
    content: url("~/assets/icons/quotes.svg");
    align-content: flex-start;
  }

  &__list {
    @include font-main-text;
  }
}
</style>
