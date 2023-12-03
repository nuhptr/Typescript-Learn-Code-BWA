namespace SingletonSolution {
   class Me {
      private static instance: Me
      private firstName: string = ""
      private lastName: string = ""

      public static getInstance(): Me {
         if (!Me.instance) {
            Me.instance = new Me()
         }

         return Me.instance
      }

      getFullName(): string {
         // misal akses db, select user ....
         this.firstName = "Firstname"
         this.lastName = "Lastname"

         return `${this.firstName} ${this.lastName}`
      }
   }

   const profile = Me.getInstance()
   console.log(profile.getFullName())

   const profile2 = Me.getInstance()
   console.log(profile2.getFullName())

   console.log(profile === profile2) // true, karena itu merupakan instance yang sama
}
