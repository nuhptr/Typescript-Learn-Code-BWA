1. Menambahkan dependencies

   -  mysql2
   -  sequelize
   -  sequelize-cli

2. Tambahkan .sequelizerc di project
   // .sequelizerc
   const path = require("path");
   require("dotenv").config();

   ```typescript
   if (process.env.NODE_ENV == "development") {
      module.exports = {
         config: path.resolve("src/config", "database.js"),
         "models-path": path.resolve("src/db", "models"),
         "seeders-path": path.resolve("src/db", "seeders"),
         "migrations-path": path.resolve("src/db", "migrations"),
      }
   } else {
      module.exports = {
         config: path.resolve("build/config", "database.js"),
         "models-path": path.resolve("build/db", "models"),
         "seeders-path": path.resolve("build/db", "seeders"),
         "migrations-path": path.resolve("build/db", "migrations"),
      }
   }
   ```

3. Init sequelize-cli

   -  npx sequelize-cli init

   Create model dan migrate

   -  npx sequelize-cli model:generate --name user --attributes
      username:string,password:string --underscored

   Migrate database to MySql

   -  npx sequelize-cli db:migrate
      // untuk membalikan migrasi
   -  npx sequelize-cli db:undo

4. npm add (nama_package) -D => tidak muncul untuk di download
   -  "@types/validator": "^13.7.0",
   -  "@types/bluebird": "^3.5.36",
