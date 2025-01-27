# Todo Next App

## Installation
To install the Todo app in your local follow these steps:

1. Install NodeJS if its not already installed. You can install it by the `brew install node` command in your terminal (it can be on your root directory)

```
~ $ brew install node
```

2. Install NVM if its not already installed. You can install it by the `brew install nvm` command in your terminal (it can be on your root directory)

```
~ $ brew install nvm
```

3. Now that you have nvm installed, we need install nvm version then node version in the .nvmrc with the `nvm install` command

```
~ $ nvm install
```

4. Clone the seo-admin-ui repo from `https://github.com/gopinathboyanapally/next-todo.git`

5. On your terminal, cd to the repo.

6. Now use the `nvm use` command to use a specific version of NodeJS required by seo-admin-ui

```
    $ nvm use
```

>should output this

```
Found '[...your-repos-path]/[app-directory]/.nvmrc' with version <20.14.0>
Now using node v20.14.0(npm v10.7.0)
```
7. Install all the dependencies

```
~ $ npm install
```

## Running the app on localhost
1. Run `npm run dev` on your terminal

2. You can now see it running on `http://localhost:3000/`
