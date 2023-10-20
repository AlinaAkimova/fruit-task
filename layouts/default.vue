<template lang="pug">
.layout
  Header
  div(class="layout__children")
    slot
  Footer
</template>

<style lang="scss" scoped>
.layout {
  &__children {
    margin-top: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
