<template>
  <div
    v-touch:swipe.right="menuShow"
    v-touch:swipe.left="menuHide"
    class="container"
  >
    <Menu :class="{ hide: !isMenu }" class="menu" />
    <div :class="{ full: !isMenu }" class="profile">
      <div class="panel bar">
        <p>@bodya_save_dev</p>
        <img src="~/assets/ava-1.jpg">
      </div>
      <div class="panel stat">
        <div class="stat-num">
          <p>579</p>
          <div class="stat-icon friends"></div>
        </div>
        <div class="stat-num">
          <p>8690</p>
          <div class="stat-icon views"></div>
        </div>
      </div>
      
      <div class="posts">
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
        <div class="post"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '~/components/Menu.vue'

  export default {
    data() {
      return {
        isMenu: true
      }
    },
    methods: {
      menuShow() {
        this.isMenu = true
      },
      menuHide() {
        this.isMenu = false
      }
    },
    components: {
      Menu
    }
  }
</script>

<style lang="sass">
  @import '~/assets/variables'

  .container
    display: flex
    flex-flow: wrap
    height: 100vh
    background-color: #888

  .menu, .profile
    transition: 200ms all

  .hide
    margin-left: -65px

  .profile
    width: calc(100% - #{$menu-width})
    height: 100vh
    overflow-y: auto

    .panel
      width: 100%
      height: $panel-height
      border-radius: 0 0 30px 30px

    @keyframes bar
        from
          margin-top: -150px
        to
          margin-top: 0

    @keyframes stat
        from
          margin-top: -150px
        to
          margin-top: -100px

    .bar
      display: flex
      align-items: center
      justify-content: flex-end
      position: relative
      background-color: #BBB
      z-index: 100
      animation: bar 300ms ease-in-out

      p
        margin: -30px 25px 0 0
        text-align: center
        font-size: 18px
        letter-spacing: 1px
        font-style: italic
        color: #555

      img
        width: $ava-size
        height: $ava-size
        margin-right: calc(( #{$panel-height - $ava-size} ) / 2)
        object-fit: cover
        border-radius: 100%

    .stat
      display: flex
      align-items: flex-end
      justify-content: space-around
      margin-top: -100px
      background-color: #999
      color: #555
      animation: stat 200ms backwards ease-in
      animation-delay: 300ms


    .stat-num
      display: flex
      align-items: center
      line-height: calc(#{$panel-height} - 100px)

      .stat-icon
        width: 16px
        height: 16px
        margin-left: 7px
        background-color: #666

        &.friends
          mask: url('/svgs/user-friends.svg') no-repeat center

        &.views
          mask: url('/svgs/eye.svg') no-repeat center

    .posts
      width: 100%
      padding: 20px

      .post
        width: 100%
        height: 150px
        margin-top: 20px
        background-color: #777
        border-radius: 20px


        &:nth-child(2n)
          height: 300px

        &:nth-child(3n)
          height: 200px

  .full
    width: 100%
</style>