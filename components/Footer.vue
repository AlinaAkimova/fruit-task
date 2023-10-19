<template lang="pug">
footer(class="footer")
    section(class="footer__bigSection")
      section(class="footer__smallSection")
        img(src='/Logo.svg' alt='logo')
        p(class="footer__infoText") Статьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      section(class="footer__smallSection")
        p(class="footer__infoText") email
        p testblogsupport@gmail.com
        div(class="footer__links")
            img(src='~/assets/facebook.svg' alt='fb')
            img(src='~/assets/vk.svg' alt='vk')
            img(src='~/assets/ig.svg' alt='ig')
            img(src='~/assets/tg.svg' alt='tg')
    section(class="footer__mailing")
      p(class="footer__mailing-white") Подпишись на рассылку
      div(class="footer__email")
        input(type="text" placeholder="Email" class="footer__input")
        button(class="footer__button") Подписаться
</template>

<style scoped lang="scss">
@import "~/assets/scss/main.scss";
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid $grey;
  padding-top: 50px;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  &__bigSection {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  &__smallSection {
    width: 20%;
    padding: 0;
    margin: 0;
  }

  &__infoText {
    @include font-info-thin;
    color: $grey;
    font-family: "Montserrat", sans-serif;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }

  &__mailing {
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color: $black;
    border-radius: 2px;
    padding: 10px 30px;

    &-white {
      @include font-info-bold;
      color: $white;
    }
  }

  &__input {
    @include font-main-text;
    background: none;
    color: $grey;
    border: none;
    border-bottom: 1px solid $grey;
    &:focus {
      outline: none;
      color: $white;
      border-bottom: 1px solid $white;
    }
    margin-right: 37px;
  }

  &__email {
    display: flex;
  }

  &__button {
    @include font-main-text;
    background-color: $blue;
    color: $white;
    border-radius: 2px;
    border: none;
  }
}
</style>
