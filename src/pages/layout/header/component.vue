<template>
  <el-header class="layout-header">
    <div class="logo">
      <img src="/assets/images/bm-logo-small.png" alt="BitManager" />
      <span>{{settings.companyName}}</span>
    </div>
    <div class="control-icons">
      <fa-icon icon="user" />
      <label for="pure-toggle-right" data-toggle-label="left">
        <fa-icon icon="search" />
      </label>
    </div>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    settings: s => s.app.settings
  })
}
</script>

<style lang="scss" scoped>
  .el-header.layout-header {
    align-items: center;
    background-color: #FFF;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    align-items: center;
    display: flex;

    img {
      margin: 0 0.8rem 0 0;
    }

    span {
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  .el-icon-more-outline, .el-icon-more {
    font-size: 1.5rem;
  }

  .control-icons {
    svg {
      margin-left: 0.8rem;
    }
  }
</style>
