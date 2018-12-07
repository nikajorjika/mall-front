<template>
  <div id="settings-page">
    <div class="settings-page-container">
      <block-header-standard :title="t('settings')"/>
      <div class="settings-form-container">
        <settings-form/>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import RegistrationForm from '../components/page-components/registration/RegistrationForm'
import SettingsForm from '../components/page-components/user/SettingsForm'

export default {
  name: 'registration-page',
  components: { SettingsForm, RegistrationForm, BlockHeaderStandard }
}
</script>
<style lang="scss">
#settings-page {
  .settings-page-container {
    margin-top: 153px;
    .settings-form-container {
      width:100%;
      max-width: 616px;
      margin: 0 auto;
      padding: 0 15px;
    }
  }
}
</style>
