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
    list-style: none;
  }

  li::before {
    content: "";
    position: relative;
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
    margin-left: -1em;
    background-color: $black;
    transform: rotate(45deg);
    vertical-align: 0.1em;
  }
}
</style>
