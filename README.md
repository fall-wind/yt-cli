A simple CLI for fast development of front end

## useage

``` init <type> <name> ```

**```yt-cli init project your-project-name```**
create
```
|____.babelrc
|____.gitignore
|____.prettierrc
|____package.json
|____README.md
|____src
| |____App.tsx
| |____components
| | |____formRow
| | | |____index.styl
| | | |____index.tsx
| | |____hello.tsx
| |____constants
| | |____index.ts
| |____index.html
| |____index.tsx
| |____pages
| | |____app
| | | |____index.styl
| | | |____index.tsx
| | | |____leftMenu
| | | | |____index.styl
| | | | |____index.tsx
| | |____login
| | | |____index.styl
| | | |____index.tsx
| | |____page1
| | | |____index.styl
| | | |____index.tsx
| |____README.md
| |____router
| | |____routerConfig.ts
| |____styles
| | |____index.styl
|____tsconfig.json
|____tslint.json
|____webpack
| |____config.js
| |____webpack.common.js
| |____webpack.dev.js
| |____webpack.prod.js
|____yarn-error.log
|____yarn.lock
```

**```yt-cli init page your-page-name```**
current support page type

will create

```
- test
    - Test.js
    - testReducer.js
```

**```yt-cli init comp your-component-name```**

option
- js: JavaScript (default)
- ts: typescript

create:

```
- test
    - index.tsx
    - index.styl
```

