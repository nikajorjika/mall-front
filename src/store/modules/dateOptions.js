const dateOptions = {
  day: {
    options: [
      {
        name: {
          ka: '1',
          en: '1'
        },
        value: '1'
      },
      {
        name: {
          ka: '2',
          en: '2'
        },
        value: '2'
      },
      {
        name: {
          ka: '3',
          en: '3'
        },
        value: '3'
      },
      {
        name: {
          ka: '4',
          en: '4'
        },
        value: '4'
      },
      {
        name: {
          ka: '5',
          en: '5'
        },
        value: '5'
      },
      {
        name: {
          ka: '6',
          en: '6'
        },
        value: '6'
      },
      {
        name: {
          ka: '7',
          en: '7'
        },
        value: '7'
      },
      {
        name: {
          ka: '8',
          en: '8'
        },
        value: '8'
      },
      {
        name: {
          ka: '9',
          en: '9'
        },
        value: '9'
      },
      {
        name: {
          ka: '10',
          en: '10'
        },
        value: '10'
      },
      {
        name: {
          ka: '11',
          en: '11'
        },
        value: '11'
      },
      {
        name: {
          ka: '12',
          en: '12'
        },
        value: '12'
      },
      {
        name: {
          ka: '13',
          en: '13'
        },
        value: '13'
      },
      {
        name: {
          ka: '14',
          en: '14'
        },
        value: '14'
      },
      {
        name: {
          ka: '15',
          en: '15'
        },
        value: '15'
      },
      {
        name: {
          ka: '16',
          en: '16'
        },
        value: '16'
      },
      {
        name: {
          ka: '17',
          en: '17'
        },
        value: '17'
      },
      {
        name: {
          ka: '18',
          en: '18'
        },
        value: '18'
      },
      {
        name: {
          ka: '19',
          en: '19'
        },
        value: '19'
      },
      {
        name: {
          ka: '20',
          en: '20'
        },
        value: '20'
      },
      {
        name: {
          ka: '21',
          en: '21'
        },
        value: '21'
      },
      {
        name: {
          ka: '22',
          en: '22'
        },
        value: '22'
      },
      {
        name: {
          ka: '23',
          en: '23'
        },
        value: '23'
      },
      {
        name: {
          ka: '24',
          en: '24'
        },
        value: '24'
      },
      {
        name: {
          ka: '25',
          en: '25'
        },
        value: '25'
      },
      {
        name: {
          ka: '26',
          en: '26'
        },
        value: '26'
      },
      {
        name: {
          ka: '27',
          en: '27'
        },
        value: '27'
      },
      {
        name: {
          ka: '28',
          en: '28'
        },
        value: '28'
      },
      {
        name: {
          ka: '29',
          en: '29'
        },
        value: '29'
      },
      {
        name: {
          ka: '30',
          en: '30'
        },
        value: '30'
      },
      {
        name: {
          ka: '31',
          en: '31'
        },
        value: '31'
      }
    ]
  },
  month: {
    options: [
      {
        name: {
          ka: 'იან',
          en: 'Jan'
        },
        value: '1'
      },
      {
        name: {
          ka: 'თებ',
          en: 'Feb'
        },
        value: '2'
      },
      {
        name: {
          ka: 'მარ',
          en: 'Mar'
        },
        value: '3'
      },
      {
        name: {
          ka: 'აპრ',
          en: 'Apr'
        },
        value: '4'
      },
      {
        name: {
          ka: 'მაი',
          en: 'May'
        },
        value: '5'
      },
      {
        name: {
          ka: 'ივნ',
          en: 'Jun'
        },
        value: '6'
      },
      {
        name: {
          ka: 'ივლ',
          en: 'Jul'
        },
        value: '7'
      },
      {
        name: {
          ka: 'აგვ',
          en: 'Aug'
        },
        value: '8'
      },
      {
        name: {
          ka: 'სექ',
          en: 'Sep'
        },
        value: '9'
      },
      {
        name: {
          ka: 'ოქტ',
          en: 'Oct'
        },
        value: '10'
      },
      {
        name: {
          ka: 'ნოე',
          en: 'Nov'
        },
        value: '11'
      },
      {
        name: {
          ka: 'დეკ',
          en: 'Dec'
        },
        value: '12'
      }
    ]
  },
  year: {
    options: function () {
      let years = []
      let i = 1955
      while (i >= 1955 && i <= 2018) {
        years.push({
          name: {
            ka: i,
            en: i
          },
          value: i
        })
        i++
      }
      return years
    }
  }
}

export default dateOptions
