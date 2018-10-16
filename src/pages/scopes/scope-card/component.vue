<template>
  <el-col :span="8" class="scope-card">
    <a href="#" class="el-card is-always-shadow" @click.prevent="goToScope">
      <header slot="header" >
        <span>{{scope.name}}</span>
        <div class="card-buttons">
          <el-tooltip class="item" effect="dark" content="Import Scope" placement="left">
            <el-button type="text" @click.stop="copyImportString">
              <fa-icon icon="clone" />
            </el-button>
          </el-tooltip>
        </div>
      </header>
      <div class="scope-card__content">
        {{scope.description}}
        <div class="info-bar">
          <p><fa-icon icon="heart" /> 0</p>
          <p><fa-icon icon="download" /> 0</p>
        </div>
      </div>
    </a>
  </el-col>
</template>

<script>
export default {
  props: {
    scope: {
      required: true,
      type: Object
    }
  },

  methods: {
    async copyImportString () {
      try {
        await this.$copyText(`bit remote add ssh://bit@localhost:2222:/scopes/${this.scope.pathName}`)
        this.$notify({
          type: 'success',
          title: 'Copied!',
          message: 'Paste that in your local bit workspace'
        })
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Uh oh!',
          message: `Couldn't copy command to clipboard`
        })
      }
    },

    goToScope () {
      console.log('clicky clicky')

      this.$router.push({ name: 'scopeShow', params: { pathName: this.scope.pathName } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-col.scope-card {
    .el-card {
      display: block;

      &:hover, &:focus {
        color: inherit;
      }

      .scope-card__content {
        padding: 1.2rem;

        .info-bar {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          width: 100%;

          p {
            color: #CCC;
            margin: 0 0 0 0.8rem;
            padding: 0;
          }
        }
      }

      header {
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        justify-content: space-between;
        padding: 1.2rem;

        span {
          font-weight: 500;
        }

        .el-button {
          padding: 0;
          margin-left: 0.8rem;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
