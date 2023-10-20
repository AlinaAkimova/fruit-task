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

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &-white {
    @include font-info-bold;
    color: $white;
  }

  &__input {
    @include font-main-text;
    background: none;
    color: $grey;

    border: none;
    border-bottom: 1px solid $grey;
    margin-right: 37px;

    &:focus {
      outline: none;
      color: $white;
      border-bottom: 1px solid $blue;
    }
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
