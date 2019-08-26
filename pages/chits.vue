<template>
  <div>
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
  .messages
    padding: 20px

    .message-box
      height: 100px
      margin-top: 20px
      background-color: $message-box-bg
      border-radius: 20px
</style>