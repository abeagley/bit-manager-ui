<template>
  <el-container class="scopes-list-container">
    <Loading :loading="loading" />
    <ScopeBar v-if="isReadyWithData" />
    <transition name="fade" mode="out-in">
      <NoScopes v-if="!isReadyWithData" />
      <el-row v-else type="flex" justify="center" :gutter="20">
        <ScopeCard
            v-for="scope in scopes"
            :key="scope.id"
            :scope="scope"
        />
      </el-row>
    </transition>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Loading from '../../components/loading/component'
import NoScopes from './no-scopes/component'
import ScopeBar from './scope-bar/component'
import ScopeCard from './scope-card/component'

export default {
  components: { Loading, NoScopes, ScopeBar, ScopeCard },

  computed: {
    ...mapState({
      loading: s => s.scopes.loading,
      scopes: s => s.scopes.data
    }),

    isReadyWithData () {
      return (!this.loading && this.scopes.length > 0)
    }
  },

  beforeMount () {
    this.loadBitScopes(this.query)
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
      'loadBitScopes'
    ])
  }
}
</script>

<style lang="scss">
  @import "../../styles/mixins";

  .el-container.scopes-list-container {
    @include full-container;
    flex-direction: column;

    .el-row {
      margin-bottom: 1.2rem;
    }
  }
</style>
