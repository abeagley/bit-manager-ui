<template>
  <el-card>
    <Table :data="repos" />
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Table from './table/component'

export default {
  components: { Table },

  computed: mapState({
    loading: s => s.repos.loading,
    repos: s => s.repos.data
  }),

  beforeMount () {
    this.loadBitRepositories(this.query)
  },

  data () {
    return {
      query: {
        where: {},
        after: '',
        before: '',
        first: 10,
        skip: 0
      }
    }
  },

  methods: {
    ...mapActions([
      'loadBitRepositories'
    ])
  }
}
</script>

<style lang="scss">
</style>
