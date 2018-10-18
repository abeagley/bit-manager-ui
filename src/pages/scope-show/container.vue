<template>
  <el-container class="scopes-bit-show">
    <Loading :loading="loading" />
    <transition name="fade" mode="out-in">
      <template v-if="!loading">
        <NoBits v-if="!dataReady" :scope="scope" />
        <BitLayout v-else :scope="scope" :bits="bits" />
      </template>
    </transition>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Loading from '../../components/loading/component'
import BitLayout from './bit-layout/component'
import NoBits from './no-bits/component'

export default {
  components: { BitLayout, Loading, NoBits },

  computed: {
    ...mapState({
      bits: s => s.scopeShow.bits,
      loading: s => s.scopeShow.loading,
      scope: s => s.scopeShow.scope
    }),

    dataReady () {
      return (this.loading === false && this.scope !== null && this.bits.length > 0)
    }
  },

  beforeMount () {
    this.loadBitScope(this.$route.params)
  },

  data () {
    return {
      query: {
        where: null,
        after: null,
        before: null,
        first: 10,
        skip: 0
      }
    }
  },

  methods: {
    ...mapActions([
      'loadBitScope'
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
  }
</style>
