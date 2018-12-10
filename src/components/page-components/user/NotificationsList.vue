<template>
  <div class="notifications-component">
    <ul>
      <li v-for="(item, index) in $store.getters.bookmarked" :key="index" v-if="item">
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'notifications-component',
  mounted: function () {
    if (!this.$store.getters.user) {
      this.$router.push({ name: 'login' })
    }
    if (!this.$store.getters.bookmarked.length) {
      this.$store.dispatch('getNotifications').then(() => {
        console.log('success')
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  methods: {
    bookmark: function (id) {
      const user = this.$store.getters.user
      if (!user) {
        this.$router.push({ name: 'login' })
      } else {
        this.$http.post(this.$store.state.apiUrls.bookmark, {
          userToken: user.token,
          itemId: id
        }).then(() => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: this.t('bookmarked_successfully')
          })
          this.$store.dispatch('getBookmarks').catch((error) => {
            console.error(error)
          })
        }).catch((error) => {
          console.error(error)
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Error',
            text: error
          })
        })
      }
    }
  }
}
</script>
<style lang="scss">
.bookmarks-list-component {
  ul{
    li{
      border-bottom:1px solid #dcdcdc;
      &:last-child{
        border-bottom: none;
      }
    }
  }
  .news-wrapper{
    width: 95%;
    max-width: 1640px;
    margin: 0 auto;
    padding-top: 2px;
  }
  .news-single{
    margin-top: 32px;
  }
  .news-single .single-wrapper .half-col.single-left{
    width: 400px;
    height: 446px;
    .image-container{
      height: 100%;
    }
  }
  .news-single .single-wrapper .half-col.single-right{
    width:100%;
    .description-container{
      padding-top: 0;
      height: 270px;
    }
  }
  .news-single .single-wrapper .half-col.single-right .bookmark{
    display: none;
  }
}
</style>
