<template>
  <el-autocomplete
    v-model="criteria"
    :fetch-suggestions="fetchBitSuggestions"
    placeholder="Search"
    @select="handleItemSelected"></el-autocomplete>
</template>

<script>
export default {
  data () {
    return {
      criteria: ''
    }
  },

  methods: {
    fetchBitSuggestions () {
      return []
    },

    handleItemSelected () {
      // no-op
    }
  }
}
</script>

<style lang="scss">
.el-autocomplete {
  margin-left: 0.8rem;
}
</style>
