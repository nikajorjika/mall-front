const dictionary = {
  attributes: {
    email: 'ელ-ფოსტის',
    name: 'სახელის',
    lastName: 'გვარის',
    phone: 'ტელეფონის ნომერი',
    password: 'პაროლის',
    terms: 'წესებს და პირობების',
    country: 'ქვეყნის',
    mobileIndex: 'ტელეფონის ინდექსი',
    day: 'დღის',
    month: 'თვის',
    year: 'წლის',
    city: 'ქალაქის',
    gender: 'სქესის',
    password_confirmation: 'განმეორებითი პაროლის',
    newPassword: 'ახალი პაროლი'
  },
  messages: {
    email: (email) => `${email} ფორმატი არასწორია`,
    required: (field) => `${field} ველი აუცილებელია`,
    numeric: (field) => `${field} უნდა შეიცავდეს მხოლოდ ციფრებს`,
    confirmed: (field) => `${field} არ ემთხვევა`
  }
}
export default dictionary
