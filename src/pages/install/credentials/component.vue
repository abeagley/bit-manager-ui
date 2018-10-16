<template>
  <div class="install-creds-container">
    <header>
      <h1>Looking good,</h1>
      <h3>Now lets setup how you'll talk through the CLI.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>CLI Credentials</span>
      </div>
      <el-form :model="credentialsForm" :rules="rules" label-position="top" ref="formRef">
        <el-alert
            title="FYI"
            description="Bit authentication uses SSH keys. Paste your public SSH key below in order to authenticate with the CLI."
            type="info"
            :closable="false">
        </el-alert>
        <el-form-item label="Public SSH Credentials" prop="credentials">
          <el-input v-model="credentialsForm.credentials" type="textarea" rows="5" />
        </el-form-item>
        <el-form-item class="is-button">
          <el-button type="primary" @click="validateAndSubmit">Next</el-button>
          <el-button type="default" @click="onGoBack">Back</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import validateSSH from '@/helpers/validation/ssh'

export default {
  props: {
    credentialsInfo: {
      required: true,
      type: Object
    },

    onCredentialsSubmit: {
      required: true,
      type: Function
    },

    onGoBack: {
      required: true,
      type: Function
    }
  },

  data () {
    const credentialsInfo = this.credentialsInfo
    const infoExists = (credentialsInfo !== {})

    return {
      credentialsForm: {
        credentials: (infoExists) ? credentialsInfo.credentials : ''
      },
      rules: {
        credentials: [
          { required: true, message: 'An initial SSH key is required', trigger: ['blur', 'change', 'submit'] },
          { validator: validateSSH, trigger: ['blur', 'change', 'submit'] }
        ]
      }
    }
  },

  methods: {
    validateAndSubmit () {
      this.$refs.formRef.validate((valid) => {
        if (!valid) { return null }

        this.onCredentialsSubmit(this.credentialsForm)
      })
    }
  }
}
</script>

<style lang="scss">
  .install-creds-container .el-alert {
    margin: 0 0 0.8rem;
  }
</style>
