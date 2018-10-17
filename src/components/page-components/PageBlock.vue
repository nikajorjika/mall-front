<template>
  <div class="page-block">
    <div class="title-container">
      <h1 class="title"> {{this.title}}</h1>
    </div>
    <div class="content-container">
      <p v-html="this.content"></p>
    </div>
    <div class="additional-info">
      <div class="additional-info-item" v-for="additional in this.additionals" :key="additional.title">
        <h4>{{additional.title}}</h4>
        <p v-html="additional.text"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    additionals: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-block {
  .title-container {
    .title {
      font-family: 'Muli', 'sans-serif';
      font-size: 4rem;
      line-height: 1.25;
      color: #000;
    }
  }
  .content-container {
    p {
      font-family: 'Muli', 'sans-serif';
      font-size: 1.6rem;
      line-height: 1.25;
      color: #000;
    }
  }
  .additional-info {
    margin-top: 85px;
    margin-bottom: 74.5px;
    display: flex;
    .additional-info-item {
      width: 376px;
      margin-right: 12px;
      h4 {
        font-size: 2.4rem;
        margin: 21px 0;
      }
      p {
        .color-grey {
          color: #848484;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.page-block {
  .additional-info {
    .additional-info-item {
      p {
        .color-grey {
          color: #848484;
        }
      }
    }
  }
}
</style>
