<template>
  <el-container class="navigation-container">
    <nav class="main-navigation">
      <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      <router-link :to="{ name: 'repos' }">Repos</router-link>
      <router-link :to="{ name: 'settings' }">Settings</router-link>
    </nav>
  </el-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .el-container.navigation-container {
    align-items: center;
    background-color: #FFF;
    border-bottom: 1px solid #e0e0e0;
    height: 42px;
    justify-content: center;
  }

  .main-navigation {
    a {
      border-bottom: 2px solid transparent;
      box-sizing: border-box;
      display: inline-block;
      color: #BBB;
      margin: 0 0.8rem;
      padding: calc(0.8rem + 2px) 0 calc(0.8rem - 4px);
      text-decoration: none;
      transition: all 0.2s linear;

      &.router-link-active {
        border-bottom: 2px solid #409EFF;
        color: #409EFF;
      }
    }
  }
</style>
