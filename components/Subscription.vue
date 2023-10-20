<template lang="pug">
section(class="subscription")
  p(class="subscription-white") Подпишись на рассылку
  div(class="subscription__email")
    input(type="text" placeholder="Email" class="subscription__input")
    button(class="subscription__button") Подписаться
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.subscription {
  display: flex;
  justify-content: space-between;

  background-color: $black;

  border-radius: 2px;
  padding: 10px 30px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &-white {
    @include font-info-bold;
    color: $white;
  }

  &__email {
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__input {
    padding-bottom: 10px;
    margin-right: 35px;
    outline: none;
    border: none;
    border-bottom: 1px solid $grey;

    font-size: inherit;

    color: $grey;
    background-color: inherit;

    &:focus {
      border-color: $blue;
      color: $white;
    }

    @media (max-width: 700px) {
      margin-bottom: 20px;
      width: 100%;
    }
  }

  &__button {
    max-width: 223px;
    width: 100%;
    padding: 10px 50px;

    border: none;
    border-radius: 2px;

    font-size: inherit;

    background-color: $blue;
    color: white;

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
}
</style>
