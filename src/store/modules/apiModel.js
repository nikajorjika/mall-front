const apiModel = {
  events: {
    api: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/events/${page}/${offset}`,
    data: []
  },
  newCollections: {
    api: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/new-collections/${page}/${offset}`,
    data: []
  },
  news: {
    api: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/news/${page}/${offset}`,
    data: []
  },
  promotions: {
    api: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/news/${page}/${offset}`,
    data: []
  },
  stores: {
    api: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/stores/${page}/${offset}`,
    data: []
  }
}

export default apiModel
