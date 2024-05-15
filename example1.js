class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayUser() {
    console.log(this.name + ' is ' + this.age + ' years old.');
  }

  updateUser(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
}

const user = new User('John', 30);
user.displayUser();
user.updateUser('Jane', 25);
user.displayUser();