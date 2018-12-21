<template>
  <div class="notifications-component">
    <ul v-if="$store.getters.notifications.length">
      <li v-for="(item, index) in $store.getters.notifications" :key="index" v-if="item">
        <span class="name" v-if="item.hasOwnProperty('entityName')">
          {{item.entityName.name[locale]}}
        </span>
        <span class="type">{{t('added_new')}} {{t(item.itemType)}}</span>
        <span class="event">{{item.name[locale]}}</span>
        <span class="date">{{formatDate(item.startDate)}}</span>
      </li>
    </ul>
    <div class="no-record" v-else>
      <p>{{t('no_notifications')}}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'notifications-component',
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
    if (!this.$store.getters.user) {
      this.$router.push({ name: 'login' })
    }
    if (!this.$store.getters.notifications.length) {
      this.$store.dispatch('getNotifications').catch((error) => {
        console.error(error)
      })
    }
    this.$store.dispatch('clearNotifications').catch(error => console.error(error))
  },
  methods: {
    formatDate: function (date) {
      const dateTime = new Date(date)
      return this.timeSince(dateTime)
    },
    timeSince: function (date) {
      let seconds = Math.floor((new Date() - date) / 1000)
      let interval = Math.floor(seconds / 2592000)
      const months = this.$store.state.dateOptions.month.options
      if (interval > 1) {
        return date.getDate() + ' ' + months[ date.getMonth() ].name[ this.locale ] + ' ' + date.getFullYear()
      }
      interval = Math.floor(seconds / 86400)
      if (interval > 1) {
        return interval + ' ' + this.t('days_ago')
      }
      interval = Math.floor(seconds / 3600)
      if (interval > 1) {
        return interval + ' ' + this.t('hours_ago')
      }
      interval = Math.floor(seconds / 60)
      if (interval > 1) {
        return interval + ' ' + this.t('minutes_ago')
      }
      return Math.floor(seconds) + ' ' + this.t('seconds_ago')
    }
  }
}
</script>
<style lang="scss">
.notifications-component {
  width: 95%;
  max-width: 1640px;
  margin: 39px auto 64px;
  ul {
    display: flex;
    flex-direction: column;
    li {
      padding: 36px 20px;
      border-bottom: 1px solid #dcdcdc;
      display: flex;
      &:first-of-type {
        border-top: 1px solid #dcdcdc;
      }
      .name, .event {
        margin-right: 30px;
        font-family: 'Muli', 'BPG Nino Mtavruli', 'sans-serif';
        color: #000000;
        font-size: 1.4rem;
        text-transform: uppercase;
        line-height: 1.29;
      }
      .date {
        margin-left: auto;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.29;
        color: #848484;
      }
      .type {
        margin-right: 30px;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.29;
        color: #848484;
      }
    }
  }
}
.no-record{
  p{
    font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
    font-size: 2.1rem;
    opacity: 1;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
