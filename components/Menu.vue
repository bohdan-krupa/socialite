<template>
  <div class="menu">
    <div @click="goToFlow" class="user"></div>
    <div class="users"></div>
    <div @click="goToChits" class="envelope"></div>
    <div class="cog"></div>
    <div class="search"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToFlow() {
        this.$router.replace('/flow')
      },
      goToChits() {
        this.$router.replace('/chits')
      }
    }
  }
</script>

<style lang="sass">
  @import '~/assets/variables'

  .menu
    display: flex
    flex-flow: column
    align-items: center
    justify-content: space-around
    width: $menu-width
    padding: 50px 0 250px 0
    background-color: #CCC

    // margin-left: -65px

    div
      width: $icon-size
      height: $icon-size
      background-color: #888

      &.user
        mask: url('/svgs/user.svg') no-repeat center

      &.users
        mask: url('/svgs/users.svg') no-repeat center

      &.envelope
        mask: url('/svgs/envelope.svg') no-repeat center

      &.cog
        mask: url('/svgs/cog.svg') no-repeat center

      &.search
        mask: url('/svgs/search.svg') no-repeat center
</style>