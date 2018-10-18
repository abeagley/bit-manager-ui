<template>
  <el-container class="bit-layout-container">
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="6">
        <FilterNav :bits="bits" />
      </el-col>
      <el-col :span="18">
        <h5>{{scope.name.toUpperCase()}} BITS</h5>
        <el-row type="flex" justify="start" :gutter="20">
          <BitCard
              v-for="bit in bits"
              :key="bit.name"
              :bit="bit"
              :scope="scope"
          />
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import BitCard from '../bit-card/component'
import FilterNav from './filter-nav/component'

export default {
  components: { BitCard, FilterNav },

  props: {
    bits: {
      required: true,
      type: Array
    },

    scope: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/mixins";

  .el-container.bit-layout-container {
    @include full-container;

    h5 {
      font-weight: 500;
      margin: 0 0 1.2rem;
    }

    .el-row {
      margin-bottom: 1.2rem;
      width: 100%;
    }
  }
</style>
