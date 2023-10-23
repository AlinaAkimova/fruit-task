<template lang="pug">
.layout
  .top
    Header
    div(class="layout__children")
      slot
  Footer
</template>

<style lang="scss" scoped>
.top {
  flex-grow: 1;
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__children {
    margin: 50px auto;
    width: 80%;
  }
}
</style>
