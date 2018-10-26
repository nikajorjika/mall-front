<template>
  <div id="news-single">
    <div class="single-wrapper">
      <div class="single-left">
        <img :src="item.photoUrl" :alt="item.name">
      </div>
      <div class="single-right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-single',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
