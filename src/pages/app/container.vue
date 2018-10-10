<template>
  <div id="app-container">
    <Loading :loading="loading"></Loading>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loading from '@/components/loading/component.vue'

export default {
  components: { Loading },

  computed: mapState({
    loading: s => s.app.loading,
    settings: s => s.app.settings
  }),

  beforeMount () {
    this.loadSettings(this.$router)
  },

  methods: mapActions([
    'loadSettings'
  ])
}
</script>

<style lang="scss">
  @import "../../styles/mixins";

  #app-container, body, html {
    @include full-container;
    margin: 0;
    padding: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
