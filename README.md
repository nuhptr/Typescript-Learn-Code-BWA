# Typescript-Learn-Code

Typescript Repository Code from basic until expert

## Folder Structure

### Typescript Mas Nusendra

1. [Basic](./typescript-mas-rendra/basic/)
2. [Design Pattern](./typescript-mas-rendra/design-pattern/)
   -  [Behavioral](./typescript-mas-rendra/design-pattern/behavioral/)
   -  [Creational](./typescript-mas-rendra/design-pattern/creational/)
   -  [Structural](./typescript-mas-rendra/design-pattern/structural/)
3. [OOP](./typescript-mas-rendra/oop/)
4. [OOP Case](./typescript-mas-rendra/oop-case/)
5. [TODO Express](./typescript-mas-rendra/todo-express/)

### Typescript my learn

1. [Basics](./typescript-my-learn/basics/)

   -  [Annotation](./adi-explore/basics/annotations/)
   -  [Type Inference](./adi-explore/basics/inference-types/)
   -  [Any Type](./adi-explore/basics/any-type/)
   -  [Function](./adi-explore/basics/functions/)
   -  [Array Type](./adi-explore/basics/arrays-types/)
   -  [Type Aliases](./adi-explore/basics/type-aliases/)
   -  [Objects](./adi-explore/basics/objects/)
   -  [Intersection Types](./adi-explore/basics/intersection-types/)
   -  [Unions](./adi-explore/basics/unions/)
   -  [Literal Types](./adi-explore/basics/literal-types/)

2. [Object Oriented Programming](./adi-explore/object-oriented-programming/)

   -  [Access Modifier](./adi-explore/object-oriented-programming/access-modifier/)
   -  [Class Properties](./adi-explore/object-oriented-programming/class-properties/)
   -  [Getter Setter](./adi-explore/object-oriented-programming/getter-setter/)
   -  [Interface](./adi-explore/object-oriented-programming/interface/)
   -  [Generics](./adi-explore/object-oriented-programming/generics/)
   -  [Type Narrowing](./adi-explore/object-oriented-programming/type-narrowing/)

3. [ts express](./adi-explore/ts-express/)

Learn init ts using typescript

4. [ts with axios](./adi-explore/ts-with-axios/)

Learn how to use axios with typescript

### Typescript Rest API

1. [User API Spec](./typescript-restfull-pzn/doc/user.md)
2. [Address API Spec](./typescript-restfull-pzn/doc/address.md)
3. [Contact API Spec](./typescript-restfull-pzn/doc/contact.md)

and many more to create a restfull api using typescript and nodejs with express

# Configuration Typescript Project

```bash
npm init -y (if you don't have package.json)
pnpm add typescript -D
npx tsc --init
```

## add additional package

-  [nodemon](https://www.npmjs.com/package/nodemon) - pnpm add nodemon -D

## add script to package.json

```json
   "scripts": {
      "tsc" : "rm -rf build/ && tsc",
      "ts" : "rm -rf build/ && tsc -w",
      "dev" : "nodemon ./build"
   }
```

## Then konfiguration in tsconfig.json

```json
   "allowJs": true,
   "outDir": "./build",
   "forceConsistentCasingInFileNames": false,
```

## Run Typescript Build

`ctrl + shift + b -> tsc:build - tsconfig.json`

## Run nodemon

`pnpm dev`

# Express Dependencies

-  [body-parser](https://www.npmjs.com/package/body-parser) - pnpm add body-parser (parse incoming request bodies in a middleware before your handlers, available under the req.body property.)
-  [morgan](https://www.npmjs.com/package/morgan) - pnpm add morgan (HTTP request logger middleware for node.js) / [winston](https://www.npmjs.com/package/winston) - pnpm add winston (A logger for just about everything.)
-  [express](https://www.npmjs.com/package/express) - pnpm add express (nodejs framework)
-  [helmet](https://www.npmjs.com/package/helmet) - pnpm add helmet (secure Express apps by setting HTTP response headers.)
-  [cors](https://www.npmjs.com/package/cors) - pnpm add cors (a Connect/Express middleware)

-  [compression](https://www.npmjs.com/package/compression) - pnpm add compression (compress response)
-  [dotenv](https://www.npmjs.com/package/dotenv) - pnpm add dotenv (save credentials from environment)

-  [sequelize](https://www.npmjs.com/package/sequelize) - pnpm add sequelize (Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.)
-  [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) - pnpm add sequelize-cli (The Sequelize Command Line Interface (CLI))
-  [mysql2](https://www.npmjs.com/package/mysql2) - pnpm add mysql2 (MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl)

-  [bcrypt](https://www.npmjs.com/package/bcrypt) - pnpm add bcrypt (A library to help you hash passwords.)
-  [express-validator](https://www.npmjs.com/package/express-validator) - pnpm add express-validator (An express.js middleware for validator)
-  [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - pnpm add jsonwebtoken (An implementation of JSON Web Tokens)

# Setup Sequelize ORM

-  Add Dependencies

```bash
pnpm add mysql2 sequelize sequelize-cli
```

-  Add .sequelizerc in project

```javascript
// .sequelizerc
const path = require("path")
require("dotenv").config()

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

-  Init sequelize-cli

```bash
npx sequelize-cli init
```

-  Create model dan migrate

```bash
npx sequelize-cli model:generate --name user --attributes username:string,password:string --underscored
```

-  Migrate database to MySql

```bash
npx sequelize-cli db:migrate
# untuk membalikan migrasi
npx sequelize-cli db:undo
```

-  Add Development Dependencies

```bash
pnpm add @types/validator -D
pnpm add @types/bluebird -D
```
