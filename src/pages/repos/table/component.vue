<template>
  <el-table
    :data="data"
  >
    <el-table-column
      prop="name"
      label="Name"
    ></el-table-column>
    <el-table-column
        prop="url"
        label="URL"
    ></el-table-column>
    <el-table-column
        prop="isLocal"
        label="Local"
        width="80"
    ></el-table-column>
    <div slot="empty">
      <EmptyList />
    </div>
  </el-table>
</template>

<script>
import EmptyList from './empty-list/component'

export default {
  components: { EmptyList },

  props: {
    data: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-table {
    width: 100%;
  }
</style>
