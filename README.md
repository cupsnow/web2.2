# web2

[Demo](https://cupsnow.github.io/web2.2/)

# Development

- Startup development environment.

```sh
npm install
```

- Build with webpack.

```sh
npm run webpack
```

- Run with webpack test server.

```sh
npm run start
```
- fix Failed message similar to `Error: ENOSPC: System limit for number of file watchers reached, watch '/home/joelai/02_dev/web2.2/src'`

```sh
sudo sysctl fs.inotify.max_user_watches=80000
```

# ChangeLog

## 210513

- Upgrade environment/packages.
- Development environment
  - Ubuntu 20.04.
  - NodeJS 16.1.0.
  - Keep node_modules in project scope.

## 190509

- Reference [this](https://medium.freecodecamp.org/how-to-use-reactjs-with-webpack-4-babel-7-and-material-design-ff754586f618) for startup guideline.
- Development environment
  - Ubuntu 18.04.
  - NodeJS 12.
  - Keep node_modules in project scope.
