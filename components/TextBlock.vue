<template lang="pug">
.textBlock
  h2(class="textBlock__title") Слияние Искусства и Технологии
  p(class="textBlock__list") Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.
  blockquote(class="textBlock__blockquote")
    img(src="~/assets/icons/quotes.svg" alt="quotes" class="textBlock__quotes")
    div(class="textBlock__blockquoteText")
      p(class="textBlock__quote") «Медиахудожник работает с современным искусством. Слово „медиа“ появляется, потому что он работает в новых формах. Медиа как пространство, в котором может существовать произведение. Например, холст, покрытый красками, или превращённый в скульптуру камень — это старые медиа. Компьютер и игры на нём — новые медиа. 
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
  margin: 100px auto;

  @media (max-width: 850px) {
    width: 100%;
  }

  &__title {
    @include font-subtitle-text;
  }

  &__subtitle {
    @include font-info-bold;
  }

  &__quotes {
    width: 80px;
    height: 64px;
    margin-right: 32px;
  }
  &__blockquoteText {
    display: flex;
    flex-direction: column;
  }

  &__quote {
    @include font-italic-text;
    color: $lightBlack;
    margin: 0;
  }

  &__author {
    @include font-info-thin;
    color: $grey;
  }

  &__blockquote {
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }

  &__list {
    @include font-main-text;
  }
}
</style>
