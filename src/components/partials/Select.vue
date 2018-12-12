<template>
  <div class="custom-select" ref="dropdownMenu">
    <div class="selected-item" @click="toggleBody" :class="{open: open}">
      <span class="selected" v-if="selectedItem"><span class="non-breakable">{{selectedItem[nameField][locale]}}</span> <font-awesome-icon
        icon="caret-down"/></span>
      <span class="placeholder" v-if="!selectedItem"><span class="non-breakable">{{placeholder[locale]}}</span> <font-awesome-icon
        icon="caret-down"/></span>
    </div>
    <div class="selectable-items" v-if="open">
      <ul>
        <li class="placeholder">
          <div class="item" @click="fireSelect(null)">{{placeholder[locale]}}</div>
        </li>
        <li v-for="(item, index) in items" v-bind:key="index">
          <div class="item" @click="fireSelect(item)" :class="{currentItem: item === selectedItem}">{{item[nameField][locale]}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'custom-select',
  watch: {
    value: function (value) {
      if (value === '' || value === null) {
        this.fireSelect(null)
      } else {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[ i ].value === this.value) {
            this.fireSelect(this.items[ i ])
          }
        }
      }
    }
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: Object,
      default: function () {
        return {
          ka: 'აირჩიეთ',
          en: 'Choose'
        }
      }
    },
    name: {
      type: String,
      default: 'select'
    },
    nameField: {
      type: String,
      default: 'name'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    value: {
      type: String,
      default: ''
    },
    selectedDefault: null
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
    this.selectedItem = this.selectedDefault
  },
  destroyed: function () {
    document.removeEventListener('click', this.documentClick)
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
      this.open = false
      this.$emit('change', { selected: selected, name: this.name, value: selected[this.valueField] })
    },
    toggleBody: function () {
      this.open = !this.open
    },
    documentClick: function (e) {
      let el = this.$refs.dropdownMenu
      let target = e.target
      if (!el.contains(target)) {
        this.open = false
      }
    }
  }
}
</script>

<style lang="scss">
.custom-select {
  position: relative;
  .selected-item {
    padding: 16.5px 13px;
    border: 1px solid rgba(220, 220, 220, 0.51);
    background-color: #ffffff;
    cursor: pointer;
    &.open{
      border: 1px solid #000000;
      border-bottom: none;
      position: relative;
      &:before{
        content: '';
        width: 88%;
        height: 1px;
        background: #dcdcdc;
        position: absolute;
        bottom:0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    @media screen and (max-width: 1650px) {
      padding: 12px 9px;
    }
    span {
      font-size: 1.3rem;
      font-family: "Muli SemiBold", 'BPG Nino Mtavruli', 'sans-serif';
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.23;
      letter-spacing: normal;
      text-transform: uppercase;
      text-align: left;
      color: #000;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1650px) {
        font-size: 0.9rem;
      }
      .non-breakable {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &.placeholder {
        color: #00000085;
        span {
          color: inherit;
        }
      }
    }
  }
  .selectable-items {
    border: solid 1px #000000;
    border-top: none;
    background-color: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
    max-height: 186px;
    overflow: hidden;
    ul {
      max-height: 186px;
      overflow-y: auto;
      width: calc(100% + 12px);
      li {
        .item {
          cursor: pointer;
          padding: 16px 16px 16px 13px;
          font-size: 1.2rem;
          font-family: "Muli", 'BPG Nino Mtavruli', 'sans-serif';
          font-weight: 300;
          text-transform: uppercase;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.23;
          letter-spacing: normal;
          color: #dcdcdc;
          transition: all .1s;
          &:hover {
            background: #f9f9f9;
            color: #000;
          }
          &.currentItem{
            color: #ffffff;
            background: #000;
          }
        }
        &.placeholder {
          color: #00000085;
        }
      }
    }
  }
}
</style>
