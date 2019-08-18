<template>
  <div class="container">
    <img src="~/assets/auth-bg.jpg">
    <div class="auth">
      <h1>Welcome</h1>
      <div class="inputs">
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
      </div>
      <div class="btn">Sign In</div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="sass">
  .container
    display: flex
    flex-direction: column
    flex-wrap: wrap
    height: 100vh

    img
      flex: 50
      object-fit: cover
      height: 0

    .auth
      flex: 50
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      margin-top: -45px
      background-color: white
      border-radius: 50px 50px 0 0

      h1
        color: #333

      .inputs
        display: flex
        align-items: center
        flex-direction: column
        width: 80%

        input
          width: 100%
          margin-bottom: 20px
          padding: 10px
          border: none
          border-bottom: 1px solid grey
          outline: none
          font-size: 17px

      .btn
        width: 80%
        text-align: center
        background-color: lighten(#C92A57, 10)
        padding: 15px 0
        font-size: 18px
        border-radius: 20px
</style>
