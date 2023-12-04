> How to install typescript

-  npm init (package = name-lastname)
-  npm/yarn add typescript -D

> add some code to package.json

-  "scripts": {
   "tsc" : "rm -rf build/ && tsc",
   "ts" : "rm -rf build/ && tsc -w",
   "dev" : "nodemon ./build"
   },

> install nodemon

-  npm add nodemon -D

> init typescript compiler

-  npx tsc --init

> then konfiguration in tsconfig.json

-  "allowJs": true,
-  "outDir": "./build",
-  "forceConsistentCasingInFileNames": false,

> then run the typescript build

-  ctrl + shift + b -> tsc:build - tsconfig.json

> then run the nodemon

-  npm run dev
