<template>
  <div class="empty-list">
    <h1>Nothing to see here...</h1>
    <h3>Hopefully soon though.</h3>
    <el-button type="primary" @click="goToScopes">Check out scopes?</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToScopes () {
      this.$router.push({ name: 'scopes' })
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
