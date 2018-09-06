person = {
  firstName: 'Aimee',
  lastName: 'Bachari',
  hometown: 'Rehoboth',
  occupation: 'Developer',
  catchPhrase: 'I\'m hungry.',
  name() {
    return `Hi. My name is ${this.firstName} ${this.lastName}`;
  }
};

console.log(person.name());
