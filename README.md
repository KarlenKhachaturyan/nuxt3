# Learning Nuxt 3 from Udemy course

Since the course has 23 sections. I've decided to comemorate what I
learn inside Readme file.


## Section 1-3

At first chapter I've learned that you can create dynamic pages within pages directory in a very interesting updated way.
For example
1. If you want to have a dynamic page you need to create it in pages directory with ` [] ` symbol. 
```bash
[page_name].vue
```
2. If you want to have a dynamic page and also make sure that the page may or may not exist you need to create it in pages directory with ` [[]] ` symbol. 
```bash
[[page_name]].vue
```
3. If you want to create a page and that looks something like ` /car/honda-32 ` where the 32-is the ' id ' then you should create it like this. 
```bash
[name]-[id].vue
```


## Section 4
` useError ` composables is used to catch the error with some values. As an example look inside `error.vue` file.

In order to handle client side errors you can use ` NuxtErrorBoundary ` built in functionality.
For that you should wrap the necessary parts like in example below to get the error object and display the message more UI friendly way.
Example

```bash

  <NuxtErrorBoundary >
    <car-side-bar />
    <NuxtPage />
    <template #error="{error}">
        <div class="text-center mx-auto flex flex-col">
        <h3>Sorry, something went wrong</h3>
        <code>{{ error }}</code>
        <button
            @click="error.value = null"
            class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
        >
            Go Back
        </button>
        </div>
    </template>
    </NuxtErrorBoundary>
```
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.