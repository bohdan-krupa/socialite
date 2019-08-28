<template>
  <div class="sub-container">
    <div class="messages">
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
      <div class="message-box"></div>
    </div>

    <div class="sub-menu">
      <!-- <div class="list-style"></div> -->
      <!-- <div class="sort"></div> -->
      <!-- <img src="/svgs/4dots.svg" alt=""> -->
    </div>
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

  // .sub-container

  .messages
    padding: 20px

    .message-box
      height: 80px
      margin-top: 20px
      background-color: $message-box-bg
      border-radius: 40px

  .sub-menu
    position: sticky
    bottom: 0
    height: 60px
    background-color: $sub-menu-bg
    border-radius: 100px 100px 0 0

    div
      // width: $icon-size
      // height: $icon-size
      background-image: url('/svgs/4dots.svg')

      // &.list-style
        // mask: url('/svgs/caret-up.svg') no-repeat center

      // &.sort
      //   mask: url('/svgs/s1.svg') no-repeat center
</style>