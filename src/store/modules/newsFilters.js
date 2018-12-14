const newsFilters = {
  categories: {
    placeholder: {
      en: 'categories',
      ka: 'კატეგორიები'
    },
    data: [
      {
        name: {
          en: 'promotions',
          ka: 'შეთავაზებები'
        },
        value: 'includeOffer'
      },
      {
        name: {
          en: 'new collections',
          ka: 'ახალი კოლექციები'
        },
        value: 'includeNewCol'
      },
      {
        name: {
          en: 'events',
          ka: 'ღონისძიებები'
        },
        value: 'includeEvent'
      },
      {
        name: {
          en: 'news',
          ka: 'ახალი ამბები'
        },
        value: 'includeNews'
      }
    ]
  },
  brands: {
    placeholder: {
      en: 'brands',
      ka: 'ბრენდები'
    }
  },
  floors: {
    placeholder: {
      en: 'floors',
      ka: 'სართული'
    },
    data: [
      {
        name: {
          ka: '-2 სართული',
          en: '-2st floor'
        },
        value: '-2'
      },
      {
        name: {
          ka: '-1 სართული',
          en: '-1st floor'
        },
        value: '-1'
      },
      {
        name: {
          ka: '0 სართული',
          en: '0 floor'
        },
        value: '0'
      },
      {
        name: {
          ka: '1 სართული',
          en: '1st floor'
        },
        value: '1'
      },
      {
        name: {
          ka: '2 სართული',
          en: '2nd floor'
        },
        value: '2'
      },
      {
        name: {
          ka: '3 სართული',
          en: '3rd floor'
        },
        value: '3'
      }
    ]
  },
  sort: {
    placeholder: {
      en: 'sort',
      ka: 'სორტირება'
    },
    data: [
      {
        name: {
          ka: 'მოახლოებული',
          en: 'upcoming'
        },
        value: 'isUpcoming'
      },
      {
        name: {
          ka: 'მიმდინარე',
          en: 'ongoing'
        },
        value: 'isOngoing'
      },
      {
        name: {
          ka: 'არქივი',
          en: 'archive'
        },
        value: 'isArchive'
      }
    ]
  }
}

export default newsFilters
