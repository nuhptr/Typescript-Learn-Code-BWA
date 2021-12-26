namespace BuilderSolution {
  // TODO: Cara Pertama (lebih disarankan)
  class User {
    public name: string = "";
    public username: string = "";
    public password: string = "";
    public email: string = "";
    public phone: string = "";
    public age: number = 0;

    getDetails() {
      return `${this.name} username = ${this.username}`;
    }
  }

  class UserBuilder {
    private user: User;

    constructor() {
      this.user = new User();
    }

    setName(value: string) {
      this.user.name = value;
      return this;
    }

    setUsername(value: string) {
      this.user.username = value;
      return this;
    }

    setPassword(value: string) {
      this.user.password = value;
      return this;
    }

    setEmail(value: string) {
      this.user.email = value;
      return this;
    }

    setPhone(value: string) {
      this.user.phone = value;
      return this;
    }

    setAge(value: number) {
      this.user.age = value;
      return this;
    }

    build() {
      return this.user;
    }
  }

  // execute
  const user1 = new UserBuilder()
    .setName("Adi Nugraha")
    .setUsername("nuhptr")
    .setPassword("12213131")
    .setAge(21)
    .build();

  console.log(user1); // User { name: "Adi Nugraha", username: "nuhptr", password: "12213131", email: "", phone: "" }

  // TODO: cara 2

  class User2 {
    public name: string;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;

    constructor({
      name = "",
      username = "",
      password = "",
      email = "",
      phone = "",
    } = {}) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
    }

    getdetails() {
      return `${this.name} username = ${this.username}`;
    }
  }

  const user2 = new User2({ name: "adi nugraha", username: "nuhptr" });
  console.log(user2);
}
