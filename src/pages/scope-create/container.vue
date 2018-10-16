<template>
  <el-card class="scope-create-container">
    <div slot="header">
      <span>Create Bit Scope</span>
    </div>
    <ScopeForm :creating="creating" :on-scope-create-submit="onScopeCreateSubmit" />
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import ScopeForm from './form/component'

export default {
  components: { ScopeForm },

  computed: mapState({
    creating: s => s.scopeCreate.creating
  }),

  methods: {
    ...mapActions([
      'createBitScope'
    ]),

    async onScopeCreateSubmit (data) {
      const scope = await this.createBitScope(data)

      if (!scope) {
        this.$notify({
          type: 'error',
          message: `Couldn't create new scope`,
          title: 'Uh oh!'
        })
        return null
      }

      this.$router.push({ name: 'scopeShow', params: { pathName: scope.pathName } })
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/alt-page";

  .el-card.scope-create-container {
    margin: 0 auto;
    width: 310px;

    @include alt-form;
  }
</style>
