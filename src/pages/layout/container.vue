<template>
  <el-container class="layout-container pure-container" data-effect="pure-effect-slide">
    <input type="checkbox" id="pure-toggle-right" class="pure-toggle" data-toggle="right">
    <div class="pure-drawer" data-position="right">
      <Search />
    </div>
    <div class="pure-pusher-container">
      <Header />
      <Navigation />
      <div class="padded-content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <label class="pure-overlay" for="pure-toggle-right" data-overlay="right"></label>
  </el-container>
</template>

<script>
import Drawer from './drawer/component.vue'
import Header from './header/component.vue'
import Navigation from './navigation/component.vue'
import Search from './search/component.vue'

export default {
  components: { Drawer, Header, Navigation, Search }
}
</script>

<style lang="scss">
  @import "../../styles/pure-drawer/index";
  @import "../../styles/mixins";

  .el-container.layout-container {
    @include full-container;
    background-color: #FAFAFA;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .pure-pusher-container {
    flex-grow: 1;
  }

  .padded-content {
    padding: 1.5rem;
  }
</style>
