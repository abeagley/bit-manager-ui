<template>
  <div v-loading.fullscreen.lock="loading"></div>
</template>

<script>
export default {
  props: {
    loading: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
</style>
