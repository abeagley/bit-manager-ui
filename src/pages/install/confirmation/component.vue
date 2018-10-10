<template>
  <div>
    <header>
      <h1>Ready to rock?</h1>
      <h3>Let's get this party started.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>Confirmation</span>
      </div>
      <el-form>
        <p>
          We've gotten all the information we need to setup BitManager and get you started. Confirm the information
          below and start pushing bits.
        </p>
        <el-form-item class="is-button">
          <el-button type="primary" @click="confirmInfo">Confirm</el-button>
          <el-button type="default" @click="onGoBack">Back</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    basicInfo: {
      required: true,
      type: Object
    },

    repoInfo: {
      required: true,
      type: Object
    },

    onGoBack: {
      required: true,
      type: Function
    },

    onConfirmationSubmit: {
      required: true,
      type: Function
    }
  },

  methods: {
    confirmInfo () {
      this.onConfirmationSubmit()
    }
  }
}
</script>

<style lang="scss">

</style>
