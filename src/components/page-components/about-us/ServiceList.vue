<template>
  <div class="service-list-container">
    <div class="service-list" v-if="single">
      <div class="list-item" v-for="(item, index) in list" :key="index" @click="toggle(item)">
        <div class="parent-container">
          <span class="icon-container"><img src="../../../assets/images/icons/carret-down.svg" alt=""></span><span
          class="name-wrapper">{{item.title}}</span>
        </div>
        <div class="content" :class="{open: openItem.indexOf(item) !== -1}">
          <p>
            {{item.content}}
          </p>
        </div>
      </div>
    </div>
    <div class="double" v-else>
      <div class="service-list">
        <div class="list-item" v-for="(item, index) in list" :key="index" @click="toggle(item)" v-if="index < 7">
          <div class="parent-container">
            <span class="icon-container"><img src="../../../assets/images/icons/carret-down.svg" alt=""></span><span
            class="name-wrapper">{{item.title}}</span>
          </div>
          <div class="content" :class="{open: openItem.indexOf(item) !== -1}">
            <p>
              {{item.content}}
            </p>
          </div>
        </div>
      </div>
      <div class="service-list">
        <div class="list-item" v-for="(item, index) in list" :key="index" @click="toggle(item)" v-if="index >= 7">
          <div class="parent-container">
            <span class="icon-container"><img src="../../../assets/images/icons/carret-down.svg" alt=""></span><span
            class="name-wrapper">{{item.title}}</span>
          </div>
          <div class="content" :class="{open: openItem.indexOf(item) !== -1}">
            <p>
              {{item.content}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service-list',
  props: {
    list: {
      type: Array
    },
    single: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      openItem: []
    }
  },
  methods: {
    toggle: function (item) {
      let index = this.openItem.indexOf(item)
      if (index !== -1) {
        this.openItem.splice(index, 1)
      } else {
        this.openItem.push(item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.service-list-container {
  .double {
    display: flex;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .service-list {
      flex: 1;
      @media screen and (max-width: 500px) {
        width:100%;
        margin-top: 0;
      }
    }
  }
  .service-list {
    margin-top: 45px;
    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }
    .list-item {
      cursor: pointer;

      .parent-container {
        display: flex;
        margin: 20px 0;

        .icon-container {
          height: 3.3px;
          width: 7.3px;
          margin: auto 7.5px auto 0;
          display: inline-block;

          img {
            display: block;
            height: 100%;
            width: 100%;
          }
        }

        .name-wrapper {
          font-family: 'Muli', 'BPG Arial', 'sans-serif';
          font-size: 1.3rem;
          line-height: 1.25;
          @media screen and (max-width: 550px) {
            font-size: 1.3rem;

          }
        }
      }

      .content {
        overflow: hidden;
        opacity: 0;
        height: 0;
        transition: all 0.3s;

        &.open {
          height: auto;
          opacity: 1;
        }

        p {
          margin: 15px 16px;
          font-family: 'Muli', 'BPG Arial', 'sans-serif';
          font-size: 14px;
          line-height: 1.25;
        }
      }
    }
  }

}
</style>
