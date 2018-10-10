<template>
  <div>
    <header>
      <h1>Ready to rock?</h1>
      <h3>Let's get this party started.</h3>
    </header>
    <el-card>
      <div slot="header">
        <span>Confirmation</span>
      </div>
      <el-form>
        <p>
          We've gotten all the information we need to setup BitManager and get you started. Confirm the information
          below and start pushing bits.
        </p>
        <ul class="confirm-list">
          <li>
            <el-icon class="el-icon-setting"></el-icon>
            <p>
              <span class="descriptor">
                Bit Version
              </span>
              <span class="description">
                {{sanityCheck.bitVersion}}
              </span>
            </p>
          </li>
          <li>
            <el-icon class="el-icon-setting"></el-icon>
            <p>
              <span class="descriptor">
                Git Version
              </span>
              <span class="description">
                {{sanityCheck.gitVersion}}
              </span>
            </p>
          </li>
        </ul>
        <el-form-item class="is-button">
          <el-button :loading="installing" type="primary" @click="confirmInfo">Confirm</el-button>
          <el-button type="default" @click="onGoBack">Back</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    basicInfo: {
      required: true,
      type: Object
    },

    installing: {
      required: true,
      type: Boolean
    },

    repoInfo: {
      required: true,
      type: Object
    },

    sanityCheck: {
      required: true,
      type: Object
    },

    onGoBack: {
      required: true,
      type: Function
    },

    onConfirmationSubmit: {
      required: true,
      type: Function
    }
  },

  methods: {
    confirmInfo () {
      this.onConfirmationSubmit()
    }
  }
}
</script>

<style lang="scss" scoped>
  .confirm-list {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      align-items: center;
      display: flex;
      width: 100%;

      p {
        .descriptor {
          font-weight: 500;
        }

        margin: 0 0 0 0.8rem;
      }
    }
  }
</style>
