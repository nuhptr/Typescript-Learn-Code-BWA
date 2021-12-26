namespace PrototypePatern {
  class User {
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

    public clone(): this {
      const clone = Object.assign({}, this);
      return clone;
    }
  }

  const user1 = new User({ name: "Adi", username: "nuhptr" });
  const user4 = user1.clone();
  user4.name = "Hendar";
  user4.email = "hendar@gmail.com";

  console.log(user4);
}
