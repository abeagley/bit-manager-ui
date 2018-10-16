<template>
  <el-container class="install-container">
    <Loading :loading="loading" />
    <transition name="fade" mode="out-in">
      <BasicInfo
        v-if="step === 1"
        :basic-info="basicInfo"
        :on-basic-info-submit="onBasicInfoSubmit"
      />
      <Credentials
        v-if="step === 2"
        :on-go-back="goBack"
        :on-credentials-submit="onCredentialsSubmit"
        :credentials-info="credentialsInfo"
      />
      <Confirmation
        v-if="step === 3"
        :basic-info="basicInfo"
        :credentials-info="credentialsInfo"
        :installing="installing"
        :on-confirmation-submit="onConfirmationSubmit"
        :on-go-back="goBack"
        :sanity-check="sanityCheck"
      />
    </transition>
  </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import BasicInfo from './basic-info/component'
import Confirmation from './confirmation/component'
import Credentials from './credentials/component'
import Loading from '../../components/loading/component'

export default {
  components: { BasicInfo, Confirmation, Credentials, Loading },

  computed: mapState({
    loading: s => s.install.loading,
    installing: s => s.install.installing,
    sanityCheck: s => s.install.sanityCheck
  }),

  data () {
    return {
      basicInfo: {},
      credentialsInfo: {},
      step: 1
    }
  },

  async beforeMount () {
    const result = await this.loadSanityCheck()
    if (!result) {
      this.$notify({
        type: 'error',
        title: 'Uh oh!',
        message: 'Unable to verify sanity check.'
      })
    }
  },

  methods: {
    ...mapActions([
      'install',
      'loadSanityCheck'
    ]),

    goBack () {
      this.step = this.step - 1
    },

    onBasicInfoSubmit (data) {
      this.basicInfo = data
      this.step = 2
    },

    async onConfirmationSubmit () {
      const result = await this.install({ ...this.basicInfo, ...this.credentialsInfo })
      if (!result) {
        return this.$notify({
          type: 'error',
          title: 'Uh oh!',
          message: 'Unable to install settings.'
        })
      }

      this.$notify({
        type: 'success',
        title: 'All set!',
        message: 'You can login now'
      })
      this.$router.push({ name: 'login' })
    },

    onCredentialsSubmit (data) {
      this.credentialsInfo = data
      this.step = 3
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/alt-page";
  @import "../../styles/mixins";

  .el-container.install-container {
    @include full-container;
    margin: 0;
    padding: 0;
  }

  .el-container.install-container {
    @include alt-page;
  }
</style>
