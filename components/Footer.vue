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
            img(src='~/assets/links/facebook.svg' alt='fb')
            img(src='~/assets/links/vk.svg' alt='vk')
            img(src='~/assets/links/ig.svg' alt='ig')
            img(src='~/assets/links/tg.svg' alt='tg')
    Subscription(class="footer__subscription")
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid $grey;
  padding-top: 50px;
  margin-top: 50px;

  bottom: 0;
  left: 0;
  width: 100%;

  @media (max-width: 850px) {
    margin-top: 25px;
  }

  &__bigSection {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 30px;

    @media (max-width: 600px) {
      width: 100%;
      padding-left: 20px;
      box-sizing: border-box;

      flex-direction: column;
      justify-content: center;
    }
  }

  &__smallSection {
    width: 20%;
    padding: 0;
    margin: 0;

    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  &__infoText {
    @include font-info-thin;
    color: $grey;
    font-family: "Montserrat", sans-serif;
  }

  &__links {
    display: flex;
    width: 60%;

    img {
      margin-right: 15px;
    }
  }

  &__subscription {
    width: 80%;
    margin: auto;
    bottom: 0;

    @media (max-width: 600px) {
      width: 100%;
      left: 0;
    }
  }
}
</style>
