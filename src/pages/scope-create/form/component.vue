<template>
  <el-form :model="createForm" :rules="rules" ref="formRef" label-position="top">
    <el-form-item label="Name" prop="name">
      <el-input v-model="createForm.name" />
    </el-form-item>
    <el-form-item label="Description" prop="description">
      <el-input v-model="createForm.description" type="textarea" rows="3" />
    </el-form-item>
    <el-form-item label="Local or Remote" prop="isLocal">
      <el-checkbox v-model="createForm.isLocal" label="Local scope?" border size="medium" />
    </el-form-item>
    <transition name="fade" mode="out-in">
      <div v-if="!createForm.isLocal">
        <el-form-item label="URL" prop="url">
          <el-input v-model="createForm.url" />
        </el-form-item>
      </div>
    </transition>
    <el-form-item class="is-button">
      <el-button :loading="creating" type="primary" @click="validateAndSubmit">Create</el-button>
      <el-button type="default" @click="cancel">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    creating: {
      required: true,
      type: Boolean
    },

    onScopeCreateSubmit: {
      required: true,
      type: Function
    }
  },

  data () {
    return {
      createForm: {
        description: '',
        name: '',
        url: null,
        isLocal: true
      },
      rules: {
        description: [
          { required: true, message: 'A description is required', trigger: ['blur', 'change', 'submit'] }
        ],
        name: [
          { required: true, message: 'A scope name is required', trigger: ['blur', 'change', 'submit'] }
        ],
        isLocal: [
          { required: true, message: 'Is this a remote or local scope?', trigger: ['blur', 'change', 'submit'] }
        ],
        url: [
          { validator: this.validateURL, trigger: ['blur', 'change', 'submit'] }
        ]
      }
    }
  },

  methods: {
    cancel () {
      this.$router.push({ name: 'scopes' })
    },

    validateAndSubmit () {
      this.$refs.formRef.validate((valid) => {
        if (!valid) { return null }

        this.onScopeCreateSubmit(this.createForm)
      })
    },

    validateURL (prop, value, cb) {
      if (!this.createForm.isLocal && value === '') {
        return cb(new Error('A URL is required for non-local scopes'))
      }

      cb()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
