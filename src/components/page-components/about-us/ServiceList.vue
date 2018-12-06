<template>
  <ul class="service-list">
    <li v-for="(item, index) in list" :key="index" @click="toggle(item)">
      <div class="parent-container">
        <span class="icon-container"><img src="../../../assets/images/icons/carret-down.svg" alt=""></span><span
        class="name-wrapper">{{item.title}}</span>
      </div>
      <div class="content" :class="{open: openItem === item}">
        <p>
          {{item.content}}
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'service-list',
  props: {
    list: {
      type: Array
    }
  },
  data: () => {
    return {
      openItem: null
    }
  },
  methods: {
    toggle: function (item) {
      this.openItem = this.openItem === item ? null : item
    }
  }
}
</script>

<style lang="scss" scoped>
.service-list {
  margin-top: 45px;
  @media screen and (max-width: 550px) {
    padding: 0 36px;
  }
  li {
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
</style>
