<template>
  <el-row class="scope-bar">
    <el-col :span="24" align="right">
      <el-button type="primary" @click="goToScopeCreate" size="medium">Create Scope</el-button>
    </el-col>
  </el-row>
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
</style>
