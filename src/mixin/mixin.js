import Vue from 'vue'
import messages from '../lang/lang'
import store from '../store'

Vue.mixin({
  methods: {
    t: function (index) {
      return messages[ store.getters.locale.locale ][ 'statics' ][ index ] ? messages[ store.getters.locale.locale ][ 'statics' ][ index ] : index
    },
    parseYoutube: function (url) {
      // eslint-disable-next-line
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
      const match = url.match(regExp)
      return (match && match[ 7 ].length === 11) ? match[ 7 ] : false
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
    getFilteredCategories: function (model) {
      const models = {
        stores: [ '5b9d3c1f62973c001fd2c698', '5b9d3c6062973c001fd2c699' ],
        entertainment: [ '5b9d3c7762973c001fd2c69a' ],
        services: [ '5b9d3c8c62973c001fd2c69b' ]
      }
      if (this.$store.getters.categories.hasOwnProperty('subcategories')) {
        return this.$store.getters.categories.subcategories.filter(item => {
          if (models[ model ].indexOf(item.categoryId) !== -1) {
            return true
          }
        })
      } else {
        return []
      }
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
      slug = strLower.replace(/[eéèẽẻẹêếềễểệ]/gi, 'e')
      slug = slug.replace(/[aáàãảạăắằẵẳặâấầẫẩậ]/gi, 'a')
      slug = slug.replace(/[oóòõỏọôốồỗổộơớờỡởợ]/gi, 'o')
      slug = slug.replace(/[uúùũủụưứừữửự]/gi, 'u')
      slug = slug.replace(/\//gi, '-')
      slug = slug.replace(/,/gi, '')
      slug = slug.replace(/%/gi, '-percent')
      slug = slug.replace(/&/gi, 'and')
      slug = slug.replace(/[.,`'"~]/gi, '')
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
    parsePageData: function (text) {
      text = text.replace(/&amp;/gi, '&')
      return JSON.parse(text)
    },
    getIconName: (index) => {
      const icons = {
        'Twitter': 'twitter',
        'Facebook': 'facebook-f',
        'Pinterest': 'pinterest',
        'LinkedIn': 'linkedin-in',
        'YouTube': 'youtube'
      }
      return icons[ index ]
    },
    formatP: function (content) {
      return `<p>${content.replace(/\n/g, '<br />')}</p>`
    },
    initFacebook: function () {
      return new Promise((resolve) => {
        window.fbAsyncInit = () => {
          // eslint-disable-next-line
          FB.init({
            appId: '917084738680946',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.10'
          })
          this.$store.commit('SET_FB_STATUS', true)
          // eslint-disable-next-line
          FB.AppEvents.logPageView()
          resolve(true)
        };

        (function (d, s, id) {
          let js
          let fjs = d.getElementsByTagName(s)[ 0 ]
          if (d.getElementById(id)) {
            return
          }
          js = d.createElement(s)
          js.id = id
          js.src = '//connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
      })
    },
    shareOverrideOGMeta: function (overrideLink, overrideTitle, overrideDescription, overrideImage) {
      // eslint-disable-next-line
      FB.ui(
        {
          method: 'share_open_graph',
          action_type: 'og.likes',
          action_properties: JSON.stringify({
            object: {
              'og:url': overrideLink,
              'og:title': overrideTitle,
              'og:description': overrideDescription,
              'og:image': overrideImage
            }
          })
        },
        (response) => {
          // Action after response
        })
    }
  },
  computed: {
    locale: function () {
      return this.$store.getters.locale.locale
    },
    currentUrl: function () {
      return window.location.href
    },
    currentFullUrl: function () {
      return window.location.href
    }
  }
})
