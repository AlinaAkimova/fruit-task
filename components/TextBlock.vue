<template lang="pug">
.textBlock(v-html="data")
</template>

<script setup>
defineProps({
  data: undefined,
});
</script>

<style lang="scss">
@import "~/assets/scss/main.scss";
.textBlock {
  width: 70%;
  margin: 100px auto;

  @media (max-width: 850px) {
    width: 100%;
    margin: 50px auto;
  }

  h2 {
    @include font-subtitle-text;
  }

  h3 {
    @include font-info-bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  blockquote {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    margin: 40px 0;

    &::before {
      content: url("~/assets/icons/quotes.svg");
      grid-column: 1;
      margin-right: 32px;
    }

    p {
      @include font-italic-text;
      color: $lightBlack;
      margin: 0;
    }

    footer {
      @include font-info-thin;
      color: $grey;
      grid-column: 2;
      margin-top: 15px;
    }
  }

  blockquote * {
    display: block;
  }

  p,
  ul {
    @include font-main-text;
  }

  li {
    list-style-type: none;
    list-style-position: outside;
  }

  li::before {
    content: "";
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: $black;
    margin-right: 10px;
    transform: rotate(45deg);
  }
}
</style>
