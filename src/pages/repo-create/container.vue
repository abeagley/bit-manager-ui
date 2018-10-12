<template>
  <el-card class="repo-create-container">
    <div slot="header">
      <span>Create Bit Repository</span>
    </div>
    <RepoForm :creating="creating" :on-repo-create-submit="onRepoCreateSubmit" />
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import RepoForm from './form/component'

export default {
  components: { RepoForm },

  computed: mapState({
    creating: s => s.repoCreate.creating
  }),

  methods: {
    ...mapActions([
      'createBitRepository'
    ]),

    async onRepoCreateSubmit (data) {
      // no-op
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/alt-page";

  .el-card.repo-create-container {
    margin: 0 auto;
    width: 310px;

    @include alt-form;
  }
</style>
