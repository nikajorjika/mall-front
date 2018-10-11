import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noScroll: false,
    navigation: [
      {
        url: '/about-us',
        name: 'about us',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        url: '/whats-new',
        name: 'what\'s new',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        url: '/stores',
        name: 'stores',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        url: '/entertainment',
        name: 'entertainment',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        url: '/services',
        name: 'services',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        url: '/for-kids',
        name: 'for kids',
        children: [
          {
            url: '/contact',
            name: 'contact'
          },
          {
            url: '/test1',
            name: 'test1'
          },
          {
            url: '/test2',
            name: 'test2'
          },
          {
            url: '/test3',
            name: 'test3'
          }
        ]
      }
    ],
    hamburgerData: [
      {
        id: 1,
        name: 'MAIN',
        children: [
          {
            id: 16,
            url: '/about-us',
            name: 'about us'
          },
          {
            id: 15,
            url: '/whats-new',
            name: 'what\'s new'
          },
          {
            id: 14,
            url: '/stores',
            name: 'stores'
          },
          {
            id: 13,
            url: '/entertainment',
            name: 'entertainment'
          },
          {
            id: 12,
            url: '/services',
            name: 'services'
          },
          {
            id: 11,
            url: '/for-kids',
            name: 'for kids'
          }
        ]
      },
      {
        id: 2,
        name: 'INFORMATION',
        children: [
          {
            id: 25,
            url: '/about-us',
            name: 'about us'
          },
          {
            id: 24,
            url: '/whats-new',
            name: 'what\'s new'
          },
          {
            id: 23,
            url: '/stores',
            name: 'stores'
          },
          {
            id: 22,
            url: '/entertainment',
            name: 'entertainment'
          },
          {
            id: 21,
            url: '/services',
            name: 'services'
          }
        ]
      },
      {
        id: 3,
        name: 'MY MALL',
        children: [
          {
            id: 31,
            url: '/about-us',
            name: 'about us'
          },
          {
            id: 32,
            url: '/whats-new',
            name: 'what\'s new'
          }
        ]
      }
    ],
    events: [
      {
        id: 1,
        image: 'https://placehold.it/579x649',
        title: 'CLARKS – offers you a limited time',
        description: 'Hot deal buy 2 get 1 FREE! Offer is valid on full collection. Visit the store at Tbilisi Mall, on the first floor'
      },
      {
        id: 2,
        image: 'https://placehold.it/579x649',
        title: 'Due to St. Mariam’s day',
        description: 'On the 25th, 26th,27th and 28th of August, Super store offers you 30% discount on the whole collection. Visit store at Tbilisi Mall, on the Third floor'
      },
      {
        id: 3,
        image: 'https://placehold.it/579x649',
        title: 'Boom Boom Birthday',
        description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
      }
    ],
    stores: [
      {
        id: 1,
        image: 'https://placehold.it/579x649',
        title: 'CLARKS – offers you a limited time',
        description: 'Hot deal buy 2 get 1 FREE! Offer is valid on full collection. Visit the store at Tbilisi Mall, on the first floor'
      },
      {
        id: 2,
        image: 'https://placehold.it/579x649',
        title: 'Due to St. Mariam’s day',
        description: 'On the 25th, 26th,27th and 28th of August, Super store offers you 30% discount on the whole collection. Visit store at Tbilisi Mall, on the Third floor'
      },
      {
        id: 3,
        image: 'https://placehold.it/579x649',
        title: 'Boom Boom Birthday',
        description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
      },
      {
        id: 4,
        image: 'https://placehold.it/579x649',
        title: 'Due to St. Mariam’s day',
        description: 'On the 25th, 26th,27th and 28th of August, Super store offers you 30% discount on the whole collection. Visit store at Tbilisi Mall, on the Third floor'
      },
      {
        id: 5,
        image: 'https://placehold.it/579x649',
        title: 'Boom Boom Birthday',
        description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
      },
      {
        id: 6,
        image: 'https://placehold.it/579x649',
        title: 'Due to St. Mariam’s day',
        description: 'On the 25th, 26th,27th and 28th of August, Super store offers you 30% discount on the whole collection. Visit store at Tbilisi Mall, on the Third floor'
      },
      {
        id: 7,
        image: 'https://placehold.it/579x649',
        title: 'Boom Boom Birthday',
        description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
      }
    ],
    apiUrls: {
      apiURL: 'https://smartfinders.herokuapp.com/api/v1',
      websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth'
    },
    apiCredentials: {
      username: 'website',
      password: '7G4QaUa25!oF'
    }
  },
  mutations: {
    SET_NO_SCROLL: (state, newValue) => {
      state.noScroll = newValue
    }
  },
  getters: {
    noScroll: (state) => {
      return state.noScroll
    },
    navigation: (state) => {
      return state.navigation
    },
    events: (state) => {
      return state.events
    },
    stores: (state) => {
      return state.stores
    }
  },
  actions: {
  }
})
