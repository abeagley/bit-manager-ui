<template>
  <el-container class="login-container">
    <transition name="fade" mode="out-in">
      <LoginForm
          :loading="loading"
          :on-login-submit="onLoginSubmit"
      />
    </transition>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import LoginForm from './login-form/component'

export default {
  components: { LoginForm },

  computed: mapState({
    loading: s => s.login.loading
  }),

  methods: {
    ...mapActions([
      'login'
    ]),

    async onLoginSubmit (data) {
      const result = await this.login(data)

      if (!result) {
        return this.$notify({
          type: 'error',
          title: 'Uh oh!',
          message: `That wasn't quite right`
        })
      }

      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/alt-page";
  @import "../../styles/mixins";

  .el-container.login-container {
    @include full-container;
    margin: 0;
    padding: 0;
  }

  .el-container.login-container {
    @include alt-page;
  }
</style>
