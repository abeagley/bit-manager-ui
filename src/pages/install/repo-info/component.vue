<template>
  <div>
    <header>
      <h1>Looking good,</h1>
      <h3>Now lets setup where the bits will go.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>Repository Information</span>
      </div>
      <el-form :model="repoInfoForm" :rules="rules" label-position="top" ref="formRef">
        <el-form-item label="Root Bit Path" prop="bitPath">
          <el-input v-model="repoInfoForm.bitPath" />
        </el-form-item>
        <el-form-item label="Public SSH Credentials" prop="credentials">
          <el-input v-model="repoInfoForm.credentials" type="textarea" rows="5" />
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
    repoInfo: {
      required: true,
      type: Object
    },

    onRepoInfoSubmit: {
      required: true,
      type: Function
    },

    onGoBack: {
      required: true,
      type: Function
    }
  },

  data () {
    const repoInfo = this.repoInfo
    const infoExists = (repoInfo !== {})

    return {
      repoInfoForm: {
        bitPath: (infoExists) ? repoInfo.repoPath : '',
        credentials: (infoExists) ? repoInfo.credentials : ''
      },
      rules: {
        bitPath: [
          { required: true, message: 'Enter a machine path for your bits', trigger: ['blur', 'change', 'submit'] }
        ],
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

        this.onRepoInfoSubmit(this.repoInfoForm)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
