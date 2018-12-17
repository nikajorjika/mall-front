const metaTags = {
  defaultMetas: {
    ka: {
      title: 'სავაჭრო ცენტრი - თბილისი მოლი | TbilisiMall.com',
      titleTemplate: '%s',
      meta: [
        {
          name: 'description',
          content: ' სავაჭრო ცენტრი "თბილისი მოლი" საერთაშორისო სტნდარტების კომპლექსია, რომელიც დასვენების, ვაჭრობისა და გართობისთვის აუცილებელ ყველა ელემენტს აერთიანებს.'
        },
        {
          property: 'og:description',
          content: ' სავაჭრო ცენტრი "თბილისი მოლი" საერთაშორისო სტნდარტების კომპლექსია, რომელიც დასვენების, ვაჭრობისა და გართობისთვის აუცილებელ ყველა ელემენტს აერთიანებს.'
        },
        {
          property: 'og:site_name',
          content: 'TbilisiMall.com'
        },
        {
          property: 'og:type ',
          content: 'სავაჭრო ცენტრი'
        }
      ]
    },
    en: {
      title: 'Shopping center - tbilisi mall | TbilisiMall.com',
      titleTemplate: '%s',
      metaTags: [
        {
          name: 'description',
          content: 'Tbilisi Mall is the first and largest such unique development in the Southern Caucasus to meet globally recognized standards.  It is the most modern center to combine leisure, retail and entertainment in the Region.'
        },
        {
          property: 'og:description',
          content: 'Tbilisi Mall is the first and largest such unique development in the Southern Caucasus to meet globally recognized standards.  It is the most modern center to combine leisure, retail and entertainment in the Region.'
        },
        {
          property: 'og:og:site_name',
          content: 'TbilisiMall.com'
        },
        {
          property: 'og:type ',
          content: 'Shopping Mall'
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
          content: description
        },
        {
          property: 'og:title',
          content: `${name} | TbilisiMall.com`
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:image',
          content: img
        }
      ]
    }
  }
}

export default metaTags
