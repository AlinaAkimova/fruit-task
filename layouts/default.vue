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
    margin: 50px auto;
    width: 80%;
  }
}
</style>
