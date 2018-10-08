<template>
  <div id="home">
    <section class="slider-section">
      <div class="slider">
        <event-home/>
      </div>
      <div class="section-bottom">
        <div class="col-2">
          <event-home/>
        </div>
        <div class="col-2">
          <event-home/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import EventHome from '../components/partials/EventHome'

export default {
  name: 'home',
  components: {
    EventHome
  }
}
</script>
<style lang="scss" scoped>
  #home{
    .slider-section{
      .section-bottom{
        display: flex;
        justify-content: space-between;
        margin-top:1.6rem;
        .col-2{
          width:calc(50% - .8rem);
        }
      }
    }
  }
</style>
