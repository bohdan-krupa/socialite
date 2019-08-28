<template>
  <div class="container">
    <img src="~/assets/auth-bg.jpg">
    <div class="auth">
      <h1>Welcome</h1>
      <div class="inputs">
        <input v-model="email" type="text" placeholder="Email">
        <input v-model="pass" type="password" placeholder="Password">
      </div>
      <div @click="signIn" class="btn">Sign In</div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'


  export default {
    layout: 'sign-in',
    data() {
      return {
        email: null,
        pass:  null
      }
    },
    methods: {
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(() => {
          this.$router.replace('/flow')
        })
      }
    }
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
      min-height: 400px
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
        margin-bottom: -30px

      .inputs
        display: flex
        align-items: center
        flex-direction: column
        width: 80%

        input
          width: 100%
          margin-bottom: 30px
          padding: 15px
          border: none
          border-bottom: 1px solid #CCC
          outline: none
          font-size: 17px

          &:focus
            border-bottom-color: grey

      .btn
        width: 80%
        text-align: center
        background-color: lighten(#C92A57, 10)
        padding: 15px 0
        font-size: 19px
        border-radius: 20px
</style>
