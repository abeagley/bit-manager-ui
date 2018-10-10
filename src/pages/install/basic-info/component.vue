<template>
  <div>
    <header>
      <h1>Hey there,</h1>
      <h3>Let's get you setup to host bits.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>Basic Information</span>
      </div>
      <el-form :model="basicInfoForm" :rules="rules" label-position="top" ref="formRef">
        <el-form-item label="Company Name" prop="companyName">
          <el-input v-model="basicInfoForm.companyName" />
        </el-form-item>
        <el-form-item label="Email Address" prop="email">
          <el-input v-model="basicInfoForm.email" type="email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="basicInfoForm.password" type="password" />
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <el-input v-model="basicInfoForm.confirmPassword" type="password" />
        </el-form-item>
        <el-form-item class="is-button">
          <el-button type="primary" @click="validateAndSubmit">Next</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import validateEmail from '@/helpers/validation/email'

export default {
  props: {
    basicInfo: {
      required: true,
      type: Object
    },

    onBasicInfoSubmit: {
      required: true,
      type: Function
    }
  },

  data () {
    const basicInfo = this.basicInfo
    const infoExists = (basicInfo !== {})

    return {
      basicInfoForm: {
        companyName: (infoExists) ? basicInfo.companyName : '',
        confirmPassword: (infoExists) ? basicInfo.confirmPassword : '',
        email: (infoExists) ? basicInfo.email : '',
        password: (infoExists) ? basicInfo.password : ''
      },
      rules: {
        companyName: [
          { required: true, message: 'A company name is required', trigger: ['blur', 'change', 'submit'] }
        ],
        confirmPassword: [
          { required: true, message: 'Re-enter your password', trigger: ['blur', 'change', 'submit'] },
          { validator: this.validatePasswordConfirmation, trigger: ['blur', 'change', 'submit'] }
        ],
        email: [
          { required: true, message: 'An email address is required', trigger: ['blur', 'change', 'submit'] },
          { validator: validateEmail, trigger: [ 'blur', 'change', 'submit' ] }
        ],
        password: [
          { required: true, message: 'A password is required', trigger: ['blur', 'change', 'submit'] },
          { validator: this.validatePassword, trigger: ['blur', 'change', 'submit'] }
        ]
      }
    }
  },

  methods: {
    validateAndSubmit () {
      this.$refs.formRef.validate((valid) => {
        if (!valid) { return null }

        this.onBasicInfoSubmit(this.basicInfoForm)
      })
    },

    validatePassword (prop, value, cb) {
      if (this.basicInfoForm.confirmPassword !== '') {
        this.$refs.formRef.validateField('confirmPassword')
      }

      cb()
    },

    validatePasswordConfirmation (prop, value, cb) {
      if (this.basicInfoForm.password !== value) {
        return cb(new Error('Passwords do not match'))
      }

      cb()
    }
  }
}
</script>

<style lang="scss">

</style>
