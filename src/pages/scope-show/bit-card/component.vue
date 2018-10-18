<template>
  <el-col :span="8" class="bit-card">
    <a href="#" class="el-card is-always-shadow" @click.prevent="goToBit">
      <header slot="header" >
        <span>{{`${bit.box}/${bit.name}`}} <small>{{bit.version}}</small></span>
        <div class="card-buttons">
          <el-tooltip class="item" effect="dark" content="Import Scope" placement="left">
            <el-button type="text" @click.stop="copyImportString">
              <fa-icon icon="clone" />
            </el-button>
          </el-tooltip>
        </div>
      </header>
      <div class="bit-card__content">
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
    bit: {
      required: true,
      type: Object
    },

    scope: {
      required: true,
      type: Object
    }
  },

  methods: {
    async copyImportString () {
      try {
        await this.$copyText(`bit import ${this.scope.pathName} ${this.bit.box}/${this.bit.name}`)
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

    goToBit () {
      this.$router.push({
        name: 'bitShow',
        params: {
          pathName: this.scope.pathName,
          box: this.bit.box,
          name: this.bit.name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-col.bit-card {
    .el-card {
      display: block;

      &:hover, &:focus {
        color: inherit;
      }

      .bit-card__content {
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

          small {
            color: rgba(0, 0, 0, 0.4);
            font-weight: 500;
          }
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
