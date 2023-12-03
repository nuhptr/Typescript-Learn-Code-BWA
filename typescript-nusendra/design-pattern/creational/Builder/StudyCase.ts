class User {
   private name: string
   private username: string
   private password: string

   constructor(name: string, username: string, password: string, email: string, address: string) {
      this.name = name
      this.username = username
      this.password = password
   }
}

// TODO: bakalan ribet banget ngubah satu-satu di file manapun
// const user1 = new User("adi", "nuhpt", "audirumah");
// const user2 = new User("adi", "nuhpt", "audirumah");
// const user3 = new User("adi", "nuhpt", "audirumah");
// const user4 = new User("adi", "nuhpt", "audirumah");
// const user5 = new User("adi", "nuhpt", "audirumah");
