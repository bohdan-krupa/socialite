<template>
  <div class="container">
    <Menu />
  </div>
</template>

<script>
  import Menu from '~/components/Menu.vue'

  export default {
    components: {
      Menu
    }
  }
</script>

<style lang="sass">
  @import '~/assets/variables.sass'

  .container
    display: flex
    flex-flow: wrap
    height: 100vh
    background-color: #888
</style>