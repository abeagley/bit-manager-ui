<template>
  <el-container>
    <transition name="fade" mode="out-in">
      <BasicInfo
        v-if="step === 1"
        :basic-info="basicInfo"
        :on-basic-info-submit="onBasicInfoSubmit"
      />
      <RepoInfo
        v-if="step === 2"
        :on-go-back="goBack"
        :on-repo-info-submit="onRepoInfoSubmit"
        :repo-info="repoInfo"
      />
      <Confirmation
        v-if="step === 3"
        :basic-info="basicInfo"
        :on-confirmation-submit="onConfirmationSubmit"
        :on-go-back="goBack"
        :repo-info="repoInfo"
      />
    </transition>
  </el-container>
</template>

<script>
import BasicInfo from './basic-info/component'
import Confirmation from './confirmation/component'
import RepoInfo from './repo-info/component'

export default {
  components: { BasicInfo, Confirmation, RepoInfo },

  data () {
    return {
      basicInfo: {},
      repoInfo: {},
      step: 1
    }
  },

  methods: {
    goBack () {
      this.step = this.step - 1
    },

    onBasicInfoSubmit (data) {
      this.basicInfo = data
      this.step = 2
    },

    onConfirmationSubmit () {
      console.log('goooooo')
    },

    onRepoInfoSubmit (data) {
      this.repoInfo = data
      this.step = 3
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/mixins";

  .el-container {
    @include full-container;
    margin: 0;
    padding: 0;
  }

  .el-container {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  h1, h3 {
    font-weight: 300;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 1.8rem;
  }

  header span {
    font-weight: 500;
  }

  .el-card {
    margin-top: 1.5rem;
    width: 315px;
  }

  .el-form-item {
    margin: 0 0 0.4rem;
    transition: all 0.2s linear;

    .el-form-item__label {
      line-height: 1rem;
      margin: 0;
      padding: 0.5rem 0;
    }

    &.is-error {
      margin: 0 0 1rem;
    }

    &.is-button {
      margin: 1.5rem 0 0.4rem;

      .el-button {
        width: 100%;
      }

      .el-button+.el-button {
        margin: 1rem 0 0;
      }
    }

    &:first-child {
      .el-form-item__label {
        padding-top: 0;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
