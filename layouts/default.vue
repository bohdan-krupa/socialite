<template>
  <div
    v-touch:swipe.right="swipeToRight"
    v-touch:swipe.left="swipeToLeft"
    class="container"
  >
    <Menu :class="{ hide: menu != 'left' }" class="menu-left" />
    <div :class="{ full: menu == 'none' }" class="area">
      <nuxt />
    </div>
    <Menu :class="{ hide: menu != 'right' }" class="menu-right" />
  </div>
</template>

<script>
  import Menu from '~/components/Menu.vue'

  export default {
    data() {
      return {
        menu: 'left'
      }
    },
    methods: {
      swipeToRight() {
        if (this.menu == 'none') this.menu = 'left'
        else if (this.menu == 'right') this.menu = 'none'
      },
      swipeToLeft() {
        if (this.menu == 'none') this.menu = 'right'
        else if (this.menu == 'left') this.menu = 'none'
      }
    },
    components: {
      Menu
    }
  }
</script>

<style lang="sass">
  html
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    font-size: 16px
    word-spacing: 1px
    -ms-text-size-adjust: 100%
    -webkit-text-size-adjust: 100%
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    box-sizing: border-box

  *,
  *:before,
  *:after
    box-sizing: border-box
    margin: 0


  @import '~/assets/variables'

  .container
    display: flex
    flex-flow: wrap
    height: 100vh
    overflow-x: hidden
    background-color: $container-bg

    .menu-left, .menu-right, .area
      transition: 200ms all

    .menu-left.hide
      margin-left: -65px

    .menu-right.hide
      margin-right: -65px

    .area
      width: calc(100% - #{$menu-width})
      height: 100%
      overflow-y: auto

    .full
      width: 100%
</style>
