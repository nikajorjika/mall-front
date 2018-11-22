const apiUrls = {
  apiURL: 'https://smartfinders.herokuapp.com/api/v1',
  websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth',
  registerAPI: 'https://smartfinders.herokuapp.com/api/v1/website/register',
  loginAPI: 'https://smartfinders.herokuapp.com/api/v1/website/login',
  getUserAPI: 'https://smartfinders.herokuapp.com/api/v1/website/user',
  getSliderItems: 'https://smartfinders.herokuapp.com/api/v1/website/slider-items',
  getAds: 'https://smartfinders.herokuapp.com/api/v1/website/ads-block-items',
  marketing: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd69',
  leasing: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52d565ee300780c8be70',
  storesAPI: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/stores/${page}/${offset}`,
  eventsAPI: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/events/${page}/${offset}`,
  promotionsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/promotions/${page}/${offset}`,
  newCollectionsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/new-collections/${page}/${offset}`,
  newsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/news/${page}/${offset}`,
  singleItemUrl: (id) => `https://smartfinders.herokuapp.com/api/v1/website/item/${id}`
}

const apiCredentials = {
  username: 'website',
  password: '7G4QaUa25!oF'
}

export { apiUrls, apiCredentials }
