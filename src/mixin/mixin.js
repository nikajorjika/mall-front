import Vue from 'vue'
import messages from '../lang/lang'
import store from '../store'

Vue.mixin({
  methods: {
    t: function (index) {
      return messages[ store.getters.locale.locale ][ 'statics' ][ index ] ? messages[ store.getters.locale.locale ][ 'statics' ][ index ] : index
    },
    groupByAlphabet: function (stores) {
      // const alphabet = store.state.alphabet[ store.getters.locale.locale ]
      let storesList = {}
      stores.forEach(function (value) {
        const fLetter = value.name[ store.getters.locale.locale ].charAt(0).toLowerCase()
        if (storesList[ fLetter ] === undefined) {
          storesList[ fLetter ] = []
        }
        storesList[ fLetter ].push(value)
      })
      return storesList
    },
    getUser: function () {
      let user = ''
      if (localStorage.getItem('user')) {
        user = sessionStorage.getItem('user')
      } else if (localStorage.getItem('user')) {
        user = localStorage.getItem('user')
      }
      return user
    },
    copyUrl: function (id) {
      this.$refs.CurrentUrl.select()
      let copyInput = document.querySelector(`#${id}`)
      copyInput.setAttribute('type', 'text')
      copyInput.select()
      document.execCommand('copy')

      try {
        let successful = document.execCommand('copy')
        let msg = successful ? 'successful' : 'unsuccessful'
        alert('Testing code was copied ' + msg)
      } catch (err) {
        alert('Oops, unable to copy')
      }
      copyInput.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    createSlug: function (str) {
      let slug = ''
      let strLower = str.toLowerCase()
      slug = strLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      slug = slug.replace(/%/gi, '-percent')
      slug = slug.replace(/đ/gi, 'd')
      slug = slug.replace(/\s*$/g, '')
      slug = slug.replace(/\s+/g, '-')

      return slug
    },
    formatPhoneNumber: function (phone) {
      return phone.replace(/(\+995)?(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
    },
    formatUrl: function (url) {
      return url.replace(/^(?:http(s)?:\/\/)?([\S.-])/, 'https://$2')
    },
    getIconName: (index) => {
      const icons = {
        'TM Twitter': 'twitter',
        'TM Facebook': 'facebook-f',
        'TM Pinterest': 'pinterest',
        'TM LinkedIn': 'linkedin-in',
        'TM YouTube': 'youtube'
      }
      return icons[ index ]
    },
    formatP: function (content) {
      return `<p>${content.replace(/\n/g, '<br />')}</p>`
    }
  },
  computed: {
    locale: function () {
      return this.$store.getters.locale.locale
    },
    currentFullUrl: function () {
      return window.location.href
    }
  }
})
