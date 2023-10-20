<template lang="pug">
.cta
  section(class="cta__section")
    img(class="cta__img" src='/CtaImg.png')
    form(class="cta__form")
      h2(class="cta__formHead") Стань участником проекта
      div(class="cta__formFields")
        input(class="cta__formInput" type="text" id="name" name="name" placeholder="Имя")
        input(class="cta__formInput" type="text" id="phone" name="phone" placeholder="Телефон")
        input(class="cta__formInput" type="text" id="email" name="email" placeholder="Email")
      button(class="cta__formButton" type="submit") Присоединиться
            
</template>

<style scoped lang="scss">
@import "~/assets/scss/main.scss";

.cta {
  @include font-main-text;

  margin: 100px 0px;
  padding: 50px;

  background-color: $black;

  @media (max-width: 1200px) {
    padding: 30px;
  }

  &__section {
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    width: 50%;
    margin-right: 50px;

    @media (max-width: 1200px) {
      margin-right: 25px;
    }

    @media (max-width: 800px) {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100%;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  &__formHead {
    @include font-subtitle-text;
    margin: 0;
    color: $white;
  }

  &__formFields {
    display: flex;
    flex-direction: column;

    margin: 50px 0;

    max-width: 350px;
    width: 100%;

    @media (max-width: 1500px) {
      margin: 25px 0;
    }

    @media (max-width: 1200px) {
      margin: 17px 0;
      max-width: 260px;
    }

    @media (max-width: 900px) {
      max-width: 100%;
    }
  }

  &__formInput:not(:last-child) {
    margin-bottom: 25px;
  }

  &__formInput {
    padding-bottom: 10px;

    outline: none;
    border: none;
    border-bottom: 1px solid $grey;

    font-size: inherit;

    color: $grey;
    background-color: inherit;

    &:focus {
      border-color: $blue;
    }
  }

  &__formButton {
    max-width: 260px;
    width: 100%;

    padding-top: 10px;
    padding-bottom: 10px;

    border: none;

    font-size: inherit;

    background-color: $blue;
    color: white;

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
}
</style>
