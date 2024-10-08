# mrlearn2024
- learn from : Code for the [Youtube video](https://youtu.be/pz4f9Q6VYZA) on how to create your own Monorepo using PNPM workspace, React, Vue, Node, Eslint, Prettier and Typescript

MonoRepo learning 2024


# Design


mrlearn2024
      ├─── frontend 
      |      ├──── irisation
      |      ├──── irisation─adm
      |      ├──── existensia
      |      └──── project4
      |       
      ├─── backend 
      |      ├──── mongoose/section
      |      ├──── mongoose/carousel
      |      ├──── mariadb/auth
      |      └──── postgresql
      | 
      ├─── libs 
      |      ├────── jscommon
      |      └────── components
      |
      └─── config 
             └────── tailwind





## Setup workspace

```sh
touch pnpm-workspace.yaml
```



```yml
packages:
  - 'frontend/*'
  - 'backend/*'
  - 'libs/*'
  - 'config/*'
```config

```sh
mkdir frontend backend libs config
```

## add git
add .gitignore
push to git


# setup  libs/jscommon
1. contains  helpers, common constant, common typedef, mongoose schema etc (every common but  none react-components )

## create the directory and init in order to have package.json
```sh
mkdir libs/jscommon
cd libs/jscommon
pnpm init
```

```sh
pnpm add typescript --save-dev
```
```sh
npm tsc --init
```


libs/jscommon/
├── node_modules/
├── src/
│   └── index.ts
├── package.json
└── tsconfig.json



## tsconfig.json

```js
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true
  }
}
```



## creer les projects frontend : 



```sh
cd frontend
pnpx create-next-app@latest 1-irisations --typescript --eslint --tailwind --src-dir --app --import-alias './src/**' 
```

### Setup common package - utils

```sh
pnpm create vite utils --template vanilla-ts
cd utils/
pnpm install
npm pkg set scripts.dev="pnpm run build --watch"
```

Remove unnecessary files

And add below contents in **main.ts** file

```js
export const isEmpty = (data: unknown) => {
if (data === null || data === undefined) {
return 'It is Empty';
}
return 'It is not Empty';
};
```

#### Setup Vite Library Mode

Add below package to create type definitions from the library

```sh
pnpm add -D vite-plugin-dts
```

Create **vite.config.ts** file and add below contents in it

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: { lib: { entry: resolve(__dirname, 'src/main.ts'), name: 'utils' } },
  plugins: [dts()],
});
```

Update **utils** **package.json** to have

```json
{...,
  "main": "./dist/utils.umd.cjs",
  "module": "./dist/utils.js",
  "types": "./dist/main.d.ts",
}
```

### Setup Backend

Create a **backend** package using below commands

```sh
cd apps/
mkdir backend
cd backend
pnpm init
npm pkg set type="module"
```

Create **tsconfig.json** with below contents in it

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "Node",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["src/**/*"]
}
```

Create **nodemon.json** with below contents in it

```json
{
  "execMap": {
    "ts": "ts-node-esm"
  }
}
```

Since our **backend** will use the **utils** library, hence update **package.json** **dependencies** with

```sh
"utils": "workspace:*"
```

and run

```sh
pnpm install
```

so that our **backend** can symlink the **utils** package present in the workspace

Create an **app.ts** file in **src** directory and add below contents in it

```js
import express from 'express';
import cors from 'cors';
import utils from 'utils';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: utils.isEmpty({}) });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
```

Create **vue-frontend** and **react-frontend** using below commands and repeat the process to add **utils** as a dependency to both of them

```sh
pnpm create vite vue-frontend --template vue-ts
cd vue-frontend
pnpm install
```

```sh
pnpm create vite react-frontend --template react-ts
cd react-frontend
pnpm install

```

Now to use the **utils** library in React, update **src/App.ts** with below contents

```js
import { isEmpty } from 'utils';
...
...
useEffect(() => {
  fetch('http://localhost:5000')
    .then((res) => res.json())
    .then((msg) => console.log({ msg }));
}, []);
....
....
return(
...
<pre>{isEmpty('abc')}</pre>
<pre>{isEmpty(null)}</pre>
</>
)
```

And similarly for Vue, update **src/App.vue** with below contents

```js
import { onMounted } from 'vue';
import { isEmpty } from 'utils';
...
...
onMounted(() => {
  fetch('http://localhost:5000')
    .then((data) => data.json())
    .then((data) => console.log(data));
});
....
....
<template>
...
...
<pre>{isEmpty({})}</pre>
<pre>{isEmpty(null)}</pre>
</template>

```

If you are facing any issue related to eslint prettier integration while committing code then run below command

```sh
pnpm add -D eslint-plugin-prettier -w
```