const metaTags = {
  defaultMetas: {
    ka: {
      title: 'თბილისი მოლი | Tbilisi Mall',
      titleTemplate: '%s',
      meta: [
        {
          name: 'og:title',
          content: 'თბილისი მოლი | Tbilisi Mall',
          vid: 'og:title'
        }, {
          name: 'description',
          content: ' სავაჭრო ცენტრი "თბილისი მოლი" საერთაშორისო სტნდარტების კომპლექსია, რომელიც დასვენების, ვაჭრობისა და გართობისთვის აუცილებელ ყველა ელემენტს აერთიანებს.',
          vid: 'og:description'
        },
        {
          property: 'og:description',
          content: ' სავაჭრო ცენტრი "თბილისი მოლი" საერთაშორისო სტნდარტების კომპლექსია, რომელიც დასვენების, ვაჭრობისა და გართობისთვის აუცილებელ ყველა ელემენტს აერთიანებს.',
          vid: 'og:description'
        },
        {
          property: 'og:site_name',
          content: 'TbilisiMall.com',
          vid: 'og:site_name'
        }
      ]
    },
    en: {
      title: 'თბილისი მოლი | Tbilisi Mall',
      titleTemplate: '%s',
      metaTags: [
        {
          name: 'og:title',
          content: 'სავაჭრო ცენტრი - თბილისი მოლი | TbilisiMall.com',
          vid: 'og:title'
        },
        {
          name: 'description',
          content: 'Tbilisi Mall is the first and largest such unique development in the Southern Caucasus to meet globally recognized standards.  It is the most modern center to combine leisure, retail and entertainment in the Region.',
          vid: 'description'
        },
        {
          property: 'og:description',
          content: 'Tbilisi Mall is the first and largest such unique development in the Southern Caucasus to meet globally recognized standards.  It is the most modern center to combine leisure, retail and entertainment in the Region.',
          vid: 'og:description'
        },
        {
          property: 'og:site_name',
          content: 'TbilisiMall.com',
          vid: 'og:site_name'
        }
      ]
    }
  },
  customPageMeta: (name, description, img) => {
    return {
      title: name,
      titleTemplate: '%s  | TbilisiMall.com',
      meta: [
        {
          name: 'description',
          content: description,
          vid: 'description'
        },
        {
          property: 'og:title',
          content: `${name} | TbilisiMall.com`,
          vid: 'og:title'
        },
        {
          property: 'og:description',
          content: description,
          vid: 'og:description'
        },
        {
          property: 'og:image',
          content: img,
          vid: 'og:image'
        }
      ]
    }
  }
}

export default metaTags
