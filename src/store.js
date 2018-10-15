import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios/index'

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
        'name': {
          'ka': 'თიბისი',
          'en': 'tbc',
          'ru': 'tbc'
        },
        'description': {
          'ka': 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.',
          'en': 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.',
          'ru': 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.'
        },
        'filters': ['Discount Card', 'Amex'],
        '_id': '5b9d4045d5c08e1752f7da05',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/5ea8fdfb-eb15-40ae-a1eb-b949fccea814.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/c0bc8943-4918-49f5-b228-9641b63e2ebc.jpeg',
        'categoryId': '5b9d3c8c62973c001fd2c69b',
        'subcategoryId': '5b9d3fa4d5c08e1752f7da03'
      }, {
        'name': {
          'ka': 'დეფაქტო',
          'en': 'deacto',
          'ru': 'defacto'
        },
        'description': {
          'ka': 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი',
          'en': 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი',
          'ru': 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი'
        },
        'filters': ['Tax free', 'Gift Card'],
        '_id': '5b9d40a8d5c08e1752f7da06',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/3e2930c2-ca60-463d-81a9-136b4fed87a3.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/90b28b9f-c9fb-4779-afef-d48b51cb2a3c.jpeg',
        'categoryId': '5b9d3c1f62973c001fd2c698',
        'subcategoryId': '5b9d3f02d5c08e1752f7d9ff'
      }, {
        'name': {
          'ka': 'საქართველოს ბანკი',
          'en': 'bank of georgia',
          'ru': 'gruzinski bank'
        },
        'description': {
          'ka': 'საქართველოს ბანკი ქვეყნის წამყვანი ბანკია, რომელსაც ბაზრის ერთ მესამედზე  მეტი უკავია მთლიანი აქტივების მიხედვით და ემსახურება 1 მილიონზე მეტ კლიენტთა ანგარიშს. საქართველოს ბანკი მის მომხმარებელს სთავაზობს კორპორატიული და საცალო საბანკო, დაგროვილი ქონების მართვის, საბროკერო და სადაზღვევო მომსახურების ფართო სპექტრს. საქართველოს ბანკის ბრიტანული ჰოლდინგური კომპანია Bank of Georgia Holdings plc–ის აქციები განთავსებულია ლონდონის საფონდო ბირჟის პრემიუმ სეგმენტში.',
          'en': 'საქართველოს ბანკი ქვეყნის წამყვანი ბანკია, რომელსაც ბაზრის ერთ მესამედზე  მეტი უკავია მთლიანი აქტივების მიხედვით და ემსახურება 1 მილიონზე მეტ კლიენტთა ანგარიშს. საქართველოს ბანკი მის მომხმარებელს სთავაზობს კორპორატიული და საცალო საბანკო, დაგროვილი ქონების მართვის, საბროკერო და სადაზღვევო მომსახურების ფართო სპექტრს. საქართველოს ბანკის ბრიტანული ჰოლდინგური კომპანია Bank of Georgia Holdings plc–ის აქციები განთავსებულია ლონდონის საფონდო ბირჟის პრემიუმ სეგმენტში.',
          'ru': 'საქართველოს ბანკი ქვეყნის წამყვანი ბანკია, რომელსაც ბაზრის ერთ მესამედზე  მეტი უკავია მთლიანი აქტივების მიხედვით და ემსახურება 1 მილიონზე მეტ კლიენტთა ანგარიშს. საქართველოს ბანკი მის მომხმარებელს სთავაზობს კორპორატიული და საცალო საბანკო, დაგროვილი ქონების მართვის, საბროკერო და სადაზღვევო მომსახურების ფართო სპექტრს. საქართველოს ბანკის ბრიტანული ჰოლდინგური კომპანია Bank of Georgia Holdings plc–ის აქციები განთავსებულია ლონდონის საფონდო ბირჟის პრემიუმ სეგმენტში.'
        },
        'filters': ['Amex', 'Gift Card'],
        '_id': '5b9d3ff8d5c08e1752f7da04',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/269ac897-9bf1-4902-9ed8-7b92355f71d8.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/4a84a9a8-352d-4bbd-aa7d-6a75d668d4ac.jpeg',
        'categoryId': '5b9d3c8c62973c001fd2c69b',
        'subcategoryId': '5b9d3fa4d5c08e1752f7da03'
      }, {
        'name': {
          'ka': 'ბურგერ კინგი',
          'en': 'burger kingi',
          'ru': 'burger kingi'
        },
        'description': {
          'ka': 'ბურგერ კინგი“ მთელს მსოფლიოში განთქმული სწრაფი კვების რესტორანია. იგი გამოირჩევა სწრაფი და ხარისხიანი მომსახურეობით',
          'en': 'ბურგერ კინგი“ მთელს მსოფლიოში განთქმული სწრაფი კვების რესტორანია. იგი გამოირჩევა სწრაფი და ხარისხიანი მომსახურეობით',
          'ru': 'ბურგერ კინგი“ მთელს მსოფლიოში განთქმული სწრაფი კვების რესტორანია. იგი გამოირჩევა სწრაფი და ხარისხიანი მომსახურეობით'
        },
        'filters': ['Discount Card', 'Amex'],
        '_id': '5b9d4145d5c08e1752f7da07',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/03d1e62e-8ca9-4de5-91da-e96c73d9393e.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/22fede1c-fd0e-43cb-9de4-1e9c6195a57c.jpeg',
        'categoryId': '5b9d3c6062973c001fd2c699',
        'subcategoryId': '5b9d3f4bd5c08e1752f7da01'
      }, {
        'name': {
          'ka': 'ზოოტოპია',
          'en': 'zootopia',
          'ru': 'zootopia'
        },
        'description': {
          'ka': 'ყველაზე ლამაზი და მრავალფეროვანი კონტაქტური ზოოპარკი საქართელოში!',
          'en': 'ყველაზე ლამაზი და მრავალფეროვანი კონტაქტური ზოოპარკი საქართელოში!',
          'ru': 'ყველაზე ლამაზი და მრავალფეროვანი კონტაქტური ზოოპარკი საქართელოში!'
        },
        'filters': ['Discount Card', 'Gift Card'],
        '_id': '5b9d41a0d5c08e1752f7da08',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/b4191d04-f0f0-45ad-8b54-dcb64e648257.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/803d4356-8eab-4825-a8fb-03478a1094d7.jpeg',
        'categoryId': '5b9d3c7762973c001fd2c69a',
        'subcategoryId': '5b9d3e6dd5c08e1752f7d9fd'
      }
    ],
    apiUrls: {
      apiURL: 'https://smartfinders.herokuapp.com/api/v1',
      websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth'
    },
    apiCredentials: {
      username: 'website',
      password: '7G4QaUa25!oF'
    },
    googleMap: {
      mapStyle: [
        {
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#f5f5f5'
            }
          ]
        },
        {
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#616161'
            }
          ]
        },
        {
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#f5f5f5'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#bdbdbd'
            }
          ]
        },
        {
          'featureType': 'poi',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#eeeeee'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#757575'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#e5e5e5'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#ffffff'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#757575'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dadada'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#616161'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        },
        {
          'featureType': 'transit',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#e5e5e5'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#eeeeee'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#c9c9c9'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        }
      ]
    },
    socials: [
      {
        icon: 'facebook-f',
        name: 'facebook',
        url: 'https://facebook.com'
      },
      {
        icon: 'twitter',
        name: 'twitter',
        url: 'https://facebook.com'
      },
      {
        icon: 'youtube',
        name: 'youtube',
        url: 'https://facebook.com'
      },
      {
        icon: 'pinterest',
        name: 'pinterest',
        url: 'https://facebook.com'
      }
    ],
    footer: {
      footerMenus: [
        {
          title: 'main',
          list: [
            {
              name: 'About us',
              url: '/about-us'
            }, {
              name: 'Wat\'s New',
              url: '/about-us'
            }, {
              name: 'Stores',
              url: '/about-us'
            }, {
              name: 'Entertainment',
              url: '/about-us'
            }, {
              name: 'Services',
              url: '/about-us'
            }, {
              name: 'For Kids',
              url: '/about-us'
            }
          ]
        }, {
          title: 'INFORMATION',
          list: [
            {
              name: 'About Company',
              url: '/about-us'
            }, {
              name: 'Media',
              url: '/about-us'
            }, {
              name: 'Career',
              url: '/about-us'
            }, {
              name: 'How to Get',
              url: '/about-us'
            }, {
              name: 'Contact',
              url: '/about-us'
            }
          ]
        }, {
          title: 'SOCIALS',
          list: [
            {
              name: 'Facebook',
              url: '/Facebook'
            }, {
              name: 'Twitter',
              url: '/Facebook'
            }, {
              name: 'Pinterest',
              url: '/Facebook'
            }, {
              name: 'Youtube',
              url: '/Facebook'
            }
          ]
        }
      ],
      footerInfo: [
        {
          title: 'working hours',
          content: ''
        }
      ]
    }
  },
  mutations: {
    SET_NO_SCROLL: (state, newValue) => {
      state.noScroll = newValue
    },
    SET_STORES: (state, payload) => {
      // const page = payload.page === undefined ? 1 : payload.page
      // const offset = payload.offset === undefined ? 3 : payload.offset
      // Axios.get(`https://smartfinders.herokuapp.com/api/v1/website/stores/${page}/${offset}`)
      //   .then(function (response) {
      //     state.events = response.data.data
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    },
    SET_EVENTS: (state, payload) => {
      // const page = page === undefined ? 1 : page
      // const offset = offset === undefined ? 3 : offset
      // Axios.get(`https://smartfinders.herokuapp.com/api/v1/website/stores/${page}/${offset}`)
      //   .then(function (response) {
      //     state.events = response.data.data
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      if (payload.type === 'append') {
        const append = [
          {
            id: 5,
            image: 'https://placehold.it/579x649',
            title: 'Boom Boom Birthday',
            description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
          },
          {
            id: 6,
            image: 'https://placehold.it/579x649',
            title: 'Boom Boom Birthday',
            description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
          },
          {
            id: 7,
            image: 'https://placehold.it/579x649',
            title: 'Boom Boom Birthday',
            description: 'On July 19th, Boom Boom is turning 4! Come, bring your kids and take part in this huge celebration!'
          }]
        for (let i in append) {
          state.events.push(append[i])
        }
      }
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
    },
    googleMap: (state) => {
      return state.googleMap
    },
    socials: (state) => {
      return state.socials
    },
    footerMenus: (state) => {
      return state.footer.footerMenus
    }
  },
  actions: {}
})
