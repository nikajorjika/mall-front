<template>
  <div id="registration">
    <div class="registration-page-container">
      <block-header-standard :title="t('registration')"/>
      <div class="registration-form-container">
        <registration-form/>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import RegistrationForm from '../components/page-components/registration/RegistrationForm'

export default {
  name: 'registration-page',
  components: { RegistrationForm, BlockHeaderStandard }
}
</script>
<style lang="scss">
#registration {
  .registration-page-container {
    margin-top: 153px;
    .registration-form-container {
      width:100%;
      max-width: 616px;
      margin: 0 auto;
    }
  }
}
</style>
