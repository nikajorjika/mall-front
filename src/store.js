import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ]
  },
  mutations: {},
  actions: {}
})
