<template>
  <div>
    <header>
      <h1>Good to see you,</h1>
      <h3>Let's get you logged in.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>Authentication</span>
      </div>
      <el-form :model="loginForm" :rules="rules" label-position="top" ref="formRef">
        <el-form-item label="Email Address" prop="email">
          <el-input v-model="loginForm.email" type="email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-form-item class="is-button">
          <el-button :loading="loading" type="primary" @click="validateAndSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import validateEmail from '@/helpers/validation/email'

export default {
  props: {
    loading: {
      required: true,
      type: Boolean
    },

    onLoginSubmit: {
      required: true,
      type: Function
    }
  },

  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Enter your email address', trigger: ['blur', 'change', 'submit'] },
          { validator: validateEmail, trigger: [ 'blur', 'change', 'submit' ] }
        ],
        password: [
          { required: true, message: 'Enter your password', trigger: ['blur', 'change', 'submit'] }
        ]
      }
    }
  },

  methods: {
    validateAndSubmit () {
      this.$refs.formRef.validate((valid) => {
        if (!valid) { return null }

        this.onLoginSubmit(this.loginForm)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
