<template>
  <div class="subscribed-list-component">
    <ul>
      <li v-for="(store, index) in $store.getters.subscribed" :key="index">
        <div class="img-container">
          <img :src="store.logoUrl" :alt="store.name[$store.getters.locale.locale]">
        </div>
        <div class="close-container" @click="deleteEvent(store._id)">
          <div class="close-button">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'subscribed-list-component',
  mounted: function () {
    if (!this.$store.getters.user) {
      this.$router.push({ name: 'login' })
    }
    if (!this.$store.getters.subscribed.length) {
      this.$store.dispatch('getSubscribed').then(() => {
        console.log('success')
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  methods: {
    deleteEvent: function (id) {
      console.log('delete id')
    }
  }
}
</script>
<style lang="scss">
.subscribed-list-component {
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px 162px -10px;
    li {
      width: calc(25% - 20px);
      margin: 20px 10px;
      display: flex;
      @media screen and (max-width: 864px){
        width: calc(33.33% - 10px);
        margin: 5px;
      }
      @media screen and (max-width: 480px){
        width: calc(50% - 10px);
        margin: 5px;
      }
      @media screen and (max-width: 400px){
        width: calc(100% - 10px);
        margin: 5px;
      }
      .img-container {
        width: 50%;
        padding-top: 50%;
        position: relative;
        border: 1px solid rgba(220, 220, 220, 0.51);
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .close-container {
        width: 50%;
        padding-top: 50%;
        position: relative;
        border: 1px solid rgba(220, 220, 220, 0.51);
        border-left: none;
        cursor: pointer;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 0;
          transition: height 0.3s;
          background: #000;
        }
        &:hover {
          &:before {
            height: 100%;
          }
          .close-button {
            &:before, &:after {
              background-color: #ffffff;
            }
          }
        }
        .close-button {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25.5px;
          height: 25.5px;
          transform: translate(-50%, -50%);
          &:before, &:after {
            position: absolute;
            left: 13px;
            content: ' ';
            height: 32px;
            width: 1px;
            top: -3px;
            background-color: #000000;
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>
