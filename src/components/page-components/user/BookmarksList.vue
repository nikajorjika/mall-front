<template>
  <div class="bookmarks-list-component">
    <ul>
      <li v-for="(item, index) in $store.getters.bookmarked" :key="index" v-if="item">
        <div class="news-wrapper">
          <news-single :item="item" @close="bookmark(item._id)" :redirect="false"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

import NewsSingle from '../news/NewsSingle'
export default {
  name: 'bookmarks-list-component',
  components: { NewsSingle },
  mounted: function () {
    if (!this.$store.getters.user) {
      this.$router.push({ name: 'login' })
    }
    if (!this.$store.getters.bookmarked.length) {
      this.$store.dispatch('getBookmarks').catch((error) => {
        console.error(error)
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
            title: this.t('bookmark_deleted_successfully')
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
        margin-bottom: 20px;
      }
    }
  }
  .news-wrapper{
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
    padding-top: 2px;
    @media screen and (max-width: 970px){
      margin: 0 auto;
    }
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
