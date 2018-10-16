<template>
  <div class="empty-list">
    <h1>Nothing to see here...</h1>
    <h3>You haven't created or linked any scope's yet.</h3>
    <el-button type="primary" @click="goToScopeCreate">Create one now?</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToScopeCreate () {
      this.$router.push({ name: 'scopeCreate' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .empty-list {
    opacity: 0;
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
