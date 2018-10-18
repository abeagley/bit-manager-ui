<template>
  <el-container class="scopes-bit-show">
    <Loading :loading="loading" />
    <transition name="fade" mode="out-in">
      <template v-if="!loading">
        <el-tabs class="bit-sections" tab-position="left">
          <el-tab-pane label="General">
            <BitDetails :bit="bit"></BitDetails>
          </el-tab-pane>
          <el-tab-pane label="Code">Code</el-tab-pane>
          <el-tab-pane label="Logs">Log</el-tab-pane>
          <el-tab-pane label="Releases">Releases</el-tab-pane>
          <el-tab-pane label="Storybook">
            <iframe src="http://bit-manager.s3-website-us-west-2.amazonaws.com" class="sb-frame"></iframe>
          </el-tab-pane>
        </el-tabs>
      </template>
    </transition>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import BitDetails from './bit-details/component'
import Loading from '../../components/loading/component'

export default {
  components: { BitDetails, Loading },

  computed: {
    ...mapState({
      bit: s => s.bitShow.bit,
      loading: s => s.bitShow.loading
    })
  },

  beforeMount () {
    this.loadBit(this.$route.params)
  },

  methods: {
    ...mapActions([
      'loadBit'
    ])
  }
}
</script>

<style lang="scss">
@import "../../styles/mixins";

.el-container.scopes-bit-show {
  @include full-container;
  flex-direction: column;

  .el-row {
    margin-bottom: 1.2rem;
  }

  .bit-sections {
    box-sizing: border-box;
    height: 100%;
    position: relative;
  }

  .el-tab-pane {
    height: 100%;
    position: relative;
  }

  .el-tabs__content {
    background-color: #FFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    height: calc(100% - 15px);
    padding: 1.2rem;
  }

  .sb-frame {
    border: 1px solid #e0e0e0;
    position: relative;
    height: 100%;
    width: 100%;
  }
}
</style>
