<template>
  <div>
    <h5>FILTER BY BOX</h5>

    <el-menu
      class="filter-boxes"
      default-active="0"
    >
      <el-menu-item index="0">
        ALL
      </el-menu-item>
      <el-menu-item v-for="(box, idx) in boxes" :key="idx" index="0">
        {{box.toUpperCase()}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    bits: {
      required: true,
      type: Array
    }
  },

  computed: {
    boxes () {
      const boxes = []
      this.bits.forEach((bit) => boxes.indexOf(bit.box) === -1 ? boxes.push(bit.box) : null)
      return boxes
    }
  }
}
</script>

<style lang="scss" scoped>
  h5 {
    font-weight: 500;
    margin: 0 0 0.4rem;
  }

  .filter-boxes {
    background-color: transparent;
    border-right: none;

    .el-menu-item {
      background-color: transparent;
      height: auto;
      line-height: 1rem;
      padding: 0.8rem !important;
    }
  }
</style>
