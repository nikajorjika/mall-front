<template>
  <div class="event-home" :class="this.type">
    <router-link to="">
      <div class="image-background">
        <img :src="item.photoUrl" :alt="item.name[$store.getters.locale.locale]">
        <div class="event-item-content">
          <div class="event-type">
            <span>OFFER</span>
          </div>
          <div class="event-name">
            <h3>{{item.name[$store.getters.locale.locale]}}</h3>
          </div>
          <div class="event-description short">
            <p>{{shortDesc}}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'event-home',
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    type: {
      type: String,
      default: ''
    },
    txtLimit: {
      type: Number,
      default: 80
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('click')
    }
  },
  computed: {
    shortDesc: function () {
      return this.item.description[ this.$store.getters.locale.locale ].length > this.txtLimit ? `${this.item.description[ this.$store.getters.locale.locale ].substr(0, parseInt(this.txtLimit))}...` : this.item.description[ this.$store.getters.locale.locale ]
    }
  }
}
</script>

<style lang="scss" scoped>
.event-home {
  width: 100%;
  &.mini {
    .image-background {
      width: 100%;
      position: relative;
      padding-top: 71.7%;
      img {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        object-fit: cover;
      }
    }
  }
  .image-background {
    width: 100%;
    position: relative;
    padding-top: 45.14%;
    img {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      object-fit: cover;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-image: linear-gradient(to bottom right, transparent, #111211);
      opacity: .6;
    }
    .event-item-content {
      position: absolute;
      bottom: 77px;
      left: 90px;
      max-width: 698px;
      width: 100%;
      z-index: 3;
      @media screen and (max-width: 1650px) {
        left: 63px;
        width: calc(100% - 63px);
      }
      .event-type {
        font-size: 1.8rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        line-height: 1.28;
        @media screen and (max-width: 1650px) {
          font-size: 1.2rem;
        }
      }
      .event-name {
        h3 {
          position: relative;
          font-size: 3.8rem;
          padding: 13px 0 14.5px;
          margin: 0;
          line-height: 1.26;
          letter-spacing: 1px;
          color: #ffffff;
          text-transform: uppercase;
          @media screen and (max-width: 1650px) {
            font-size: 2.6rem;
          }
          &:after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            max-width: 378px;
            height: 1px;
            background: #ffffff;
            bottom: 0;
          }
        }
      }
      .event-description {
        p {
          font-size: 2.4rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          line-height: 1.25;
          margin: 14px 0 0;
          @media screen and (max-width: 1650px) {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}
</style>
