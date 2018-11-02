import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios/index'
import messages from './lang/lang'
import navigation from './store/navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noScroll: false,
    languages: [
      {
        name: 'ENG',
        locale: 'en'
      },
      {
        name: 'ქარ',
        locale: 'ge'
      }
    ],
    loading: {
      stores: false,
      events: false
    },
    locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'en',
    navigation: navigation,
    hamburgerData: [
      {
        id: 16,
        url: '/about-us',
        name: {
          en: 'about us',
          ge: 'ჩვენს შესახებ'
        },
        children: [
          {
            id: 12,
            url: '/contact',
            name: 'contact'
          },
          {
            id: 13,
            url: '/test1',
            name: 'test1'
          },
          {
            id: 14,
            url: '/test2',
            name: 'test2'
          },
          {
            id: 15,
            url: '/test3',
            name: 'test3'
          }
        ]
      },
      {
        id: 15,
        url: '/whats-new',
        name: {
          en: 'what\'s new',
          ge: 'სიახლეები'
        }
      },
      {
        id: 14,
        url: '/stores',
        name: {
          en: 'Stores',
          ge: 'მაღაზიები'
        }
      },
      {
        id: 13,
        url: '/entertainment',
        name: {
          en: 'entertainment',
          ge: 'გართობა'
        }
      },
      {
        id: 12,
        url: '/services',
        name: {
          en: 'services',
          ge: 'სერვისები'
        }
      },
      {
        id: 11,
        url: '/for-kids',
        name: {
          en: 'for kids',
          ge: 'ბავშვებისთვის'
        }
      },
      {
        id: 10,
        url: '/information',
        name: {
          en: 'information',
          ge: 'ინფორმაცია'
        }
      },
      {
        id: 9,
        url: '/my-mall',
        name: {
          en: 'my mall',
          ge: 'ჩემი მოლი'
        }
      }
    ],
    events: [
      {
        name: {
          ka: 'დაუმიზნე სურპრიზებს!',
          en: 'დაუმიზნე სურპრიზებს!',
          ru: 'დაუმიზნე სურპრიზებს!'
        },
        description: {
          ka: 'გვესტუმრეთ 31 აგვისტოდან 16 სექტემბრის ჩათვლით, დაუმიზნეთ და მოიგეთ თქვენთვის სასურველი პრიზები!\n\nაქციის მექანიკა და მონაწილეობის პირობები:\n\nაქციაში მონაწილეობის მისაღებად საქართველოს ნებისმიერი მოქალაქე, 18 წელს ზემოთ, უნდა ეწვიოს სავაჭრო ცენტრ „თბილისი მოლს“ 2018 წლის 31 აგვისტოს 10:00 საათიდან, 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და სავაჭრო ცენტრის მაღაზიებში, გარდა ჰიპერმარკეტ „კარფურისა“, შეიძინოს (10:00 საათიდან 21:30 საათის განმავლობაში) 300 (სამასი) ლარის ან მეტი ღირებულების ნებისმიერი საქონელი (ნივთები) ერთი ან რამდენიმე და შეძენის დამადასტურებელი ქვითრები (ერთი ან რამდენიმე) წარადგინოს „თბილისი მოლში“ სპეციალურად მომზადებულ კუთხეში, მეორე სართულზე.\n2018 წლის 31 აგვისტოს 10:00 საათიდან 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და მიიღოს სავაჭრო ცენტრ „თბილისი მოლის“-გან პრიზის მოგების შანსი!\nთამაშდება: 50 (ორმოცდაათი) ლარიანი სასაჩუქრე ბარათი, თბილისი მოლის სუვენირი, ან ღონისძიების სხვა მონაწილეების მიერ დაწესებული პრიზები.\n\nსაჩუქრის გაცემისას მხარეებს (საჩუქრის გამცემსა და მიმღებს) შორის ფორმდება მიღება-ჩაბარების აქტი.',
          en: 'გვესტუმრეთ 31 აგვისტოდან 16 სექტემბრის ჩათვლით, დაუმიზნეთ და მოიგეთ თქვენთვის სასურველი პრიზები!\n\nაქციის მექანიკა და მონაწილეობის პირობები:\n\nაქციაში მონაწილეობის მისაღებად საქართველოს ნებისმიერი მოქალაქე, 18 წელს ზემოთ, უნდა ეწვიოს სავაჭრო ცენტრ „თბილისი მოლს“ 2018 წლის 31 აგვისტოს 10:00 საათიდან, 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და სავაჭრო ცენტრის მაღაზიებში, გარდა ჰიპერმარკეტ „კარფურისა“, შეიძინოს (10:00 საათიდან 21:30 საათის განმავლობაში) 300 (სამასი) ლარის ან მეტი ღირებულების ნებისმიერი საქონელი (ნივთები) ერთი ან რამდენიმე და შეძენის დამადასტურებელი ქვითრები (ერთი ან რამდენიმე) წარადგინოს „თბილისი მოლში“ სპეციალურად მომზადებულ კუთხეში, მეორე სართულზე.\n2018 წლის 31 აგვისტოს 10:00 საათიდან 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და მიიღოს სავაჭრო ცენტრ „თბილისი მოლის“-გან პრიზის მოგების შანსი!\nთამაშდება: 50 (ორმოცდაათი) ლარიანი სასაჩუქრე ბარათი, თბილისი მოლის სუვენირი, ან ღონისძიების სხვა მონაწილეების მიერ დაწესებული პრიზები.\n\nსაჩუქრის გაცემისას მხარეებს (საჩუქრის გამცემსა და მიმღებს) შორის ფორმდება მიღება-ჩაბარების აქტი.',
          ru: 'გვესტუმრეთ 31 აგვისტოდან 16 სექტემბრის ჩათვლით, დაუმიზნეთ და მოიგეთ თქვენთვის სასურველი პრიზები!\n\nაქციის მექანიკა და მონაწილეობის პირობები:\n\nაქციაში მონაწილეობის მისაღებად საქართველოს ნებისმიერი მოქალაქე, 18 წელს ზემოთ, უნდა ეწვიოს სავაჭრო ცენტრ „თბილისი მოლს“ 2018 წლის 31 აგვისტოს 10:00 საათიდან, 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და სავაჭრო ცენტრის მაღაზიებში, გარდა ჰიპერმარკეტ „კარფურისა“, შეიძინოს (10:00 საათიდან 21:30 საათის განმავლობაში) 300 (სამასი) ლარის ან მეტი ღირებულების ნებისმიერი საქონელი (ნივთები) ერთი ან რამდენიმე და შეძენის დამადასტურებელი ქვითრები (ერთი ან რამდენიმე) წარადგინოს „თბილისი მოლში“ სპეციალურად მომზადებულ კუთხეში, მეორე სართულზე.\n2018 წლის 31 აგვისტოს 10:00 საათიდან 2018 წლის 16 სექტემბრის 22:00 საათამდე პერიოდში და მიიღოს სავაჭრო ცენტრ „თბილისი მოლის“-გან პრიზის მოგების შანსი!\nთამაშდება: 50 (ორმოცდაათი) ლარიანი სასაჩუქრე ბარათი, თბილისი მოლის სუვენირი, ან ღონისძიების სხვა მონაწილეების მიერ დაწესებული პრიზები.\n\nსაჩუქრის გაცემისას მხარეებს (საჩუქრის გამცემსა და მიმღებს) შორის ფორმდება მიღება-ჩაბარების აქტი.'
        },
        _id: '5b9d4284d5c08e1752f7da09',
        date: '2018-10-16T13:01',
        photoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/ac03c104-f00f-45f0-b739-4ad5715bb64c.jpeg',
        isApproved: true,
        createdBy: 'asd'
      },
      {
        name: {
          ka: 'ვბრუნდებით სკოლაში',
          en: 'ვბრუნდებით სკოლაში',
          ru: 'ვბრუნდებით სკოლაში'
        },
        description: {
          ka: 'თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!',
          en: 'თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!',
          ru: 'თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!'
        },
        _id: '5b9d42de9b7ce917a2ffb240',
        date: '2018-10-27T03:44',
        photoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/ff6234cc-f494-4a81-a25a-51071a82cf13.jpeg',
        isApproved: true,
        createdBy: 'user'
      },
      {
        name: {
          ka: 'სიახლე თბილისი მოლში',
          en: 'სიახლე თბილისი მოლში',
          ru: 'სიახლე თბილისი მოლში'
        },
        description: {
          ka: 'თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!',
          en: 'ინგლისური თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!',
          ru: 'რუსული თბილისი მოლში სკოლისთვის მზადება იწყება! 31 აგვისტოდან 16 სექტემბრის ჩათვლით აქ ნახავთ ყველაზე დიდ გამოფენა-გაყიდვას, სადაც იპოვნით განსაკუთრებულ ინვენტარს, რაც სასწავლო წლის წარმატებით დასაწყებად არის საჭირო!\n\nგარდა ამისა, თბილისი მოლის უმასპინძლებს სპეციალურ ვორქშოფებს, სადაც მშობლებს საშუალება ექნებათ მოისმინონ რჩევები პროფესიონალებისგან საჭირო თემებზე. ფსიქოლოგები, კვების სპეციალისტები, ფიზიკური მომზადების მწვრთნელები გირჩევენ რა არის საუკეთესო თქვენი შვილისთვის!\n\nამასთან ერთად, მოიყვანეთ ბავშვები, ჩაერთეთ სახალისო აქტივობებში და მოიგეთ უამრავი პრიზი!\nეწვიეთ თბილისი მოლის გრანდიოზულ სასკოლო ბაზრობას, ერთად მოვემზადოთ ახალი სასწავლო წლისთვის!'
        },
        _id: '5bd3422ffac98e00216486d5',
        date: '2018-10-31T01:00',
        photoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/9fc25c36-91b5-45f7-ab3e-9f8ee31ce67d.jpeg',
        isApproved: true,
        createdBy: 'asd'
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
        'filters': [ 'Discount Card', 'Amex' ],
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
        'filters': [ 'Tax free', 'Gift Card' ],
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
        'filters': [ 'Amex', 'Gift Card' ],
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
        'filters': [ 'Discount Card', 'Amex' ],
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
        'filters': [ 'Discount Card', 'Gift Card' ],
        '_id': '5b9d41a0d5c08e1752f7da08',
        'logoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/b4191d04-f0f0-45ad-8b54-dcb64e648257.jpeg',
        'photoUrl': 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/803d4356-8eab-4825-a8fb-03478a1094d7.jpeg',
        'categoryId': '5b9d3c7762973c001fd2c69a',
        'subcategoryId': '5b9d3e6dd5c08e1752f7d9fd'
      }
    ],
    messages: messages,
    apiUrls: {
      apiURL: 'https://smartfinders.herokuapp.com/api/v1',
      websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth',
      storesAPI: 'https://smartfinders.herokuapp.com/api/v1/website/stores',
      eventsAPI: 'https://smartfinders.herokuapp.com/api/v1/website/events',
      singleItemUrl: 'https://smartfinders.herokuapp.com/api/v1/website/item'
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
    pageData: {
      aboutUs: {
        title: 'ABOUT US',
        content: 'Tbilisi Mall is the first and largest such unique development in the Southern Caucasus to meet globally recognized standards.  It is the most modern center to combine leisure, retail and entertainment in the Region. Like all RAKEEN projects, Tbilisi Mall blends innovative, ecologically green architecture with a natural habitat.  Its architectural concept is both contemporary and suitable for its surroundings, reflecting the culture and contemporary demands of the country. Located within easy reach (How To Get) of the city center, Tbilisi Mall provides an exciting new family destination experience for Georgia’s residents and tourists and offers a broad range of high street and internationally famous brands (Store Directory).  The Mall occupies a total of four floors with a GLA of approximately 72,000 m² . It comprises up to 150 stores, 2,700 parking spaces, \n' +
        'a 15,000 m² hypermarket and a 1,000 m² entertainment center.\n' +
        '<br><br>' +
        'The outlets of well-known retail brands, department stores and banking facilities line the concourse. Other features include a multi-screen cinema, distinguished food court and a family entertainment center on the upper levels. Tbilisi Mall also benefits from a multi-storey free-of-charge car park, spread over four underground levels. \n' +
        '<br><br>' +
        'Tbilisi Mall changes your shopping experience, allowing customers of any age and interest to “Discover a New Lifestyle.”  Here, you can spend loving, playful, chic and adventurous days by yourself or with your friends and family.\n' +
        '<br><br>' +
        'Tbilisi Mall captures all that is best about the New Tbilisi Lifestyle. Our team regularly offers a wide range of creative innovations, able to transform the Atrium from fashion show runway to sports hall, making Tbilisi Mall the most attractive destination in the city.\n' +
        '<br><br>' +
        'The interior of Tbilisi Mall changes according to the season, its beautifully designed spaces reflecting the colors of Tbilisi. Floral arrangements put Tbilisi Mall in a seasonal mood with tones and compositions for spring, summer, autumn and winter which are perfectly realized in the Atrium and add a festive flair and cheer to it. Our customers are always impressed by our seasonal galleries; enjoying the inspirational motifs of spring, cheerful summer landscapes, the vibrant colors and harvest of autumn and walking in a winter wonderland. Tbilisi Mall captures all that is best about the New Tbilisi Lifestyle. Our team regularly offers a wide range of creative innovations, able to transform the Atrium from fashion show runway to sports hall, making Tbilisi Mall the most attractive destination in the city.',
        additional: [
          {
            title: 'WORKING HOURS:',
            text: 'Everyday: from - 10:00 to 22:00',
            secondaryText: ''

          },
          {
            title: 'CARREFOUR:',
            text: 'Everyday from 09:30 to 22:00 <br> <span class="color-grey">Please note, at owners discretion the <br> working hours may differ in some stores</span>'
          }
        ],
        staff: [
          {
            id: 1,
            name: 'Name Lastname',
            position: 'Marketing Director',
            image: 'https://placehold.it/139x139'
          },
          {
            id: 2,
            name: 'Name Lastname',
            position: 'Marketing Director',
            image: 'https://placehold.it/139x139'
          },
          {
            id: 3,
            name: 'Name Lastname',
            position: 'Marketing Director',
            image: 'https://placehold.it/139x139'
          },
          {
            id: 4,
            name: 'Name Lastname',
            position: 'Marketing Director',
            image: 'https://placehold.it/139x139'
          },
          {
            id: 5,
            name: 'Name Lastname',
            position: 'Marketing Director',
            image: 'https://placehold.it/139x139'
          }
        ]
      },
      aboutUsMenu: [
        {
          name: 'ABOUT US',
          url: '/about-us'
        },
        {
          name: 'GUEST SERVICE',
          url: '/about-us/guest-service'
        },
        {
          name: 'MALL MAP',
          url: '/about-us/mall-map'
        },
        {
          name: 'TBILISI MALL TAXI',
          url: '/about-us/tbilisi-mall-taxi'
        },
        {
          name: 'GIFT CARD',
          url: '/about-us/gift-card'
        },
        {
          name: 'MARKETING',
          url: '/about-us/marketing'
        },
        {
          name: 'LEASING',
          url: '/about-us/leasing'
        },
        {
          name: 'MAGAZINE',
          url: '/about-us/magazine'
        }
      ]
    },
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
    },
    newsFilters: {
      categories: {
        placeholder: {
          en: 'categories',
          ge: 'კატეგორიები'
        },
        data: [
          {
            name: {
              en: 'sales',
              ge: 'სეილები'
            },
            value: 'sales'
          },
          {
            name: {
              en: 'offers',
              ge: 'შეთავაზებები'
            },
            value: 'offers'
          },
          {
            name: {
              en: 'new collections',
              ge: 'ახალი კოლექციები'
            },
            value: 'new_collections'
          },
          {
            name: {
              en: 'events',
              ge: 'ივენთები'
            },
            value: 'events'
          }
        ]
      },
      brands: {
        placeholder: {
          en: 'brands',
          ge: 'ბრენდები'
        },
        data: [
          {
            name: {
              en: 'zara',
              ge: 'ზარა'
            },
            value: 'zara'
          },
          {
            name: {
              en: 'zara2',
              ge: 'ზარა2'
            },
            value: 'zara2'
          },
          {
            name: {
              en: 'zara3',
              ge: 'ზარა3'
            },
            value: 'zara3'
          }
        ]
      },
      floors: {
        placeholder: {
          en: 'floors',
          ge: 'სართული'
        },
        data: [
          {
            name: {
              ge: '1 სართული',
              en: '1st floor'
            },
            value: '1st-floor'
          },
          {
            name: {
              ge: '2 სართული',
              en: '2nd floor'
            },
            value: '2nd-floor'
          },
          {
            name: {
              ge: '3 სართული',
              en: '3rd floor'
            },
            value: '3rd-floor'
          }
        ]
      },
      sort: {
        placeholder: {
          en: 'floors',
          ge: 'სართული'
        },
        data: [
          {
            name: {
              ge: '1 სართული',
              en: '1st floor'
            },
            value: '1st-floor'
          },
          {
            name: {
              ge: '2 სართული',
              en: '2nd floor'
            },
            value: '2nd-floor'
          },
          {
            name: {
              ge: '3 სართული',
              en: '3rd floor'
            },
            value: '3rd-floor'
          }
        ]
      }
    },
    storeFilters: {
      categories: {
        placeholder: {
          en: 'category',
          ge: 'კატეგორიები'
        },
        data: [
          {
            name: {
              en: 'WOMEN FASHION AND ACCESSORIES',
              ge: 'WOMEN FASHION AND ACCESSORIES'
            },
            value: 'women-fashion-and-accessories'
          },
          {
            name: {
              en: 'MEN FASHION AND ACCESSORIES',
              ge: 'MEN FASHION AND ACCESSORIES'
            },
            value: 'men-fashion-and-accessories'
          },
          {
            name: {
              en: 'CHILDREN AND MATERNITY FASHION',
              ge: 'CHILDREN AND MATERNITY FASHION'
            },
            value: 'children-fashion-and-accessories'
          },
          {
            name: {
              en: 'FOOTWEAR',
              ge: 'FOOTWEAR'
            },
            value: 'footwear'
          },
          {
            name: {
              en: 'TOYS, HOBBIES AND GIFTS',
              ge: 'TOYS, HOBBIES AND GIFTS'
            },
            value: 'toys-hobbies-and-gifts'
          },
          {
            name: {
              en: 'JEWELRY',
              ge: 'JEWELRY'
            },
            value: 'jewelry'
          },
          {
            name: {
              en: 'HEALTH AND BEAUTY',
              ge: 'HEALTH AND BEAUTY'
            },
            value: 'health-and-beauty'
          },
          {
            name: {
              en: 'LINGERIE',
              ge: 'LINGERIE'
            },
            value: 'lingerie'
          },
          {
            name: {
              en: 'OPTICAL/EYE WEAR',
              ge: 'OPTICAL/EYE WEAR'
            },
            value: 'optical-eye-wear'
          },
          {
            name: {
              en: 'BOOKS AND STATIONARY',
              ge: 'BOOKS AND STATIONARY'
            },
            value: 'books-and-stationary'
          }
        ]
      },
      floors: {
        placeholder: {
          en: 'floors',
          ge: 'სართული'
        },
        data: [
          {
            name: {
              ge: '1 სართული',
              en: '1st floor'
            },
            value: '1st-floor'
          },
          {
            name: {
              ge: '2 სართული',
              en: '2nd floor'
            },
            value: '2nd-floor'
          },
          {
            name: {
              ge: '3 სართული',
              en: '3rd floor'
            },
            value: '3rd-floor'
          }
        ]
      },
      sort: {
        placeholder: {
          en: 'floors',
          ge: 'სართული'
        },
        data: [
          {
            name: {
              ge: '1 სართული',
              en: '1st floor'
            },
            value: '1st-floor'
          },
          {
            name: {
              ge: '2 სართული',
              en: '2nd floor'
            },
            value: '2nd-floor'
          },
          {
            name: {
              ge: '3 სართული',
              en: '3rd floor'
            },
            value: '3rd-floor'
          }
        ]
      }
    }
  },
  mutations: {
    SET_LOCALE: (state, locale) => {
      state.locale = locale
      localStorage.setItem('locale', locale)
    },
    SET_NO_SCROLL: (state, newValue) => {
      state.noScroll = newValue
    },
    SET_NAVIGATION: (state, newValue) => {
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
    LOAD_MORE: (state, payload) => {
      const model = payload.model
      payload.data.forEach(function (element) {
        state[ model ].push(element)
      })
    },
    SET_EVENTS: (state, payload) => {
      // const page = page === undefined ? 1 : page
      // const offset = offset === undefined ? 3 : offset
      // Axios.get(`https://smartfinders.herokuapp.com/api/v1/website/events/${page}/${offset}`)
      //   .then(function (response) {
      //     state.events = response.data.data
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    },
    SET_LOADING_STATE: (state, payload) => {
      state.loading[ payload.model ] = payload.value
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
    locale: (state) => {
      return state.languages.find(e => e.locale === state.locale)
    },
    languages: (state) => {
      return state.languages
    },
    footerMenus: (state) => {
      return state.footer.footerMenus
    },
    message: (state, index) => {
      return state.messages[ index ]
    }
  },
  actions: {
    loadItems: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = request.url
        const model = request.model
        const page = request.page === undefined ? 0 : request.page
        const offset = request.offset === undefined ? 1 : request.offset
        context.commit('SET_LOADING_STATE', { model: model, value: true })
        Axios.get(`${url}/${page}/${offset}`)
          .then(function (response) {
            context.commit('LOAD_MORE', { model: model, data: response.data.data })
            context.commit('SET_LOADING_STATE', { model: model, value: false })
            if (response.data.data.length < offset) {
              resolve('NOT_ENOUGH_RECORDS')
            } else {
              resolve(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
            context.commit('SET_LOADING_STATE', { model: model, value: false })
          })
      })
    },
    loadSingle: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = request.url
        const id = request.id
        Axios.get(`${url}/${id}`)
          .then(function (response) {
            if (!response.data.data) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
          })
      })
    }
  }
})
