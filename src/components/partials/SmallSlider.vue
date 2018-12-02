<template>
  <div class="small-slider">
    <carousel :perPage="1" :scrollPerPage="false" paginationActiveColor="#ffffff" paginationColor="#ffffff"
              :paginationPadding="8" paginationSize="10" :navigationEnabled="true" :paginationEnabled="true">
      <slide>
        <div class="img-container">
          <img src="https://placehold.it/210x210" alt="">
        </div>
      </slide><slide>
        <div class="img-container">
          <img src="https://placehold.it/210x210" alt="">
        </div>
      </slide><slide>
        <div class="img-container">
          <img src="https://placehold.it/210x210" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'small-slider',
  components: {
    Carousel,
    Slide
  }
}
</script>
<style lang="scss">
.small-slider {
  width: 100%;

}
</style>
