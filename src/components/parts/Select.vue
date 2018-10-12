<template>
  <div class="custom-select">
    <div class="selected-item" @click="toggleBody">
      <span class="selected" v-if="this.selectedItem">{{this.selectedItem.name}} <font-awesome-icon icon="caret-down"/></span>
      <span class="placeholder" v-if="!this.selectedItem">{{this.placeholder}} <font-awesome-icon icon="caret-down"/></span>

    </div>
    <div class="selectable-items" v-if="this.open">
      <ul>
        <li v-for="item in this.items" v-bind:key="item.id">
          <div class="item" @click="fireSelect(item)">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'custom-select',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: 'Choose item to select'
    }
  },
  data: function () {
    return {
      selectedItem: null,
      open: false
    }
  },
  methods: {
    fireSelect: function (selected) {
      this.selectedItem = selected
      this.open = !this.open
      this.$emit('change', selected)
    },
    toggleBody: function () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
  .custom-select{
    position: relative;
    .selected-item{
      padding: 16px 13px;
      border: solid 0.5px #dcdcdc;
      background-color: #ffffff;
      cursor: pointer;
      span{
        font-size: 13px;
        font-family: "Muli SemiBold", 'sans-serif';
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.23;
        letter-spacing: normal;
        text-align: left;
        color: #000;
        display: flex;
        justify-content: space-between;
        &.placeholder{
          color: #00000085;
        }
      }
    }
    .selectable-items{
      border: solid 0.5px #dcdcdc;
      background-color: #ffffff;
      position: absolute;
      top:100%;
      left: 0;
      width:100%;
      ul{
        li{
          .item{
            cursor: pointer;
            padding: 16px 13px;
            font-size: 13px;
            font-family: "Muli SemiBold", 'sans-serif';
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.23;
            letter-spacing: normal;
            &:hover{
              background: #dcdcdc;
            }
          }
        }
      }
    }
  }
</style>
