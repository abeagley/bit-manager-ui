<template>
  <div class="empty-list">
    <h1>Nothing to see here...</h1>
    <h3>You haven't exported any bit components to this scope.</h3>
    <el-button type="primary" @click="copyImportString">Export one now?</el-button>
  </div>
</template>

<script>
export default {
  props: {
    scope: {
      required: true,
      type: Object
    }
  },

  methods: {
    async copyImportString () {
      try {
        await this.$copyText(`bit remote add ssh://bit@localhost:2222:/scopes/${this.scope.pathName}`)
        this.$notify({
          type: 'success',
          title: 'Copied!',
          message: 'Paste that in your local bit workspace'
        })
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Uh oh!',
          message: `Couldn't copy command to clipboard`
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .empty-list {
    padding: 1.5rem;
    text-align: center;
  }

  h1, h3 {
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
</style>
