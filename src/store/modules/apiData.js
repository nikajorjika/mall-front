const apiUrls = {
  apiURL: 'https://smartfinders.herokuapp.com/api/v1',
  websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth',
  storesAPI: 'https://smartfinders.herokuapp.com/api/v1/website/stores',
  eventsAPI: 'https://smartfinders.herokuapp.com/api/v1/website/events',
  registerAPI: 'https://smartfinders.herokuapp.com/api/v1/website/register',
  loginAPI: 'https://smartfinders.herokuapp.com/api/v1/website/login',
  getUserAPI: 'https://smartfinders.herokuapp.com/api/v1/website/user',
  getSliderItems: 'https://smartfinders.herokuapp.com/api/v1/website/slider-items',
  getAds: 'https://smartfinders.herokuapp.com/api/v1/website/ads-block-items',
  singleItemUrl: (id) => `https://smartfinders.herokuapp.com/api/v1/website/item/${id}`
}

const apiCredentials = {
  username: 'website',
  password: '7G4QaUa25!oF'
}

export { apiUrls, apiCredentials }
