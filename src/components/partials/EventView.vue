<template>
  <div class="event-item">
    <div class="wrapper">
      <div class="img-wrapper">
        <img :src="this.event.image" :alt="this.event.title">
      </div>
      <div class="content-container">
        <div class="title">
          <h3>{{this.event.title}}</h3>
        </div>
        <div class="description">
          <p>{{this.event.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-item',
  props: {
    event: {
      type: Object,
      default: () => {
        return {
          image: '',
          title: '',
          description: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .event-item{
    width: 100%;
    .img-wrapper{
      img{
        width:100%;
        height: 649px;
        object-fit: cover;
      }
    }
    .content-container{
      .title{
        h3{
          font-size: 2.4rem;
          line-height: 1.25;
          text-align: center;
          color: #000000;
          margin: 32px 0 19px;
        }
      }
      .description{
        p{
          opacity: 0.6;
          font-size: 1.7rem;
          font-weight: 300;
          line-height: 1.24;
          text-align: center;
          color: #000000;
          margin: 0;
          height: 66px;
          padding-bottom: 15px;
        }
      }
    }
  }
</style>
