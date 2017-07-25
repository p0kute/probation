# `Awesome HTC Project Stub`

## Tech stack
 - `pug`
 - `babel`
 - `postcss`
 - `webapck 2`
 - `json-server`
 - `eslint and stylelint`
 - `pre-commit hooks`
 
## Postcss plugins
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-url](https://github.com/postcss/postcss-url)
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [postcss-mixins](https://github.com/postcss/postcss-mixins)
- [postcss-for](https://github.com/antyakushev/postcss-for)
- [postcss-each](https://github.com/outpunk/postcss-each)
- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)

## Notes
because we want build each resource in separate folder all `svg` file names should be suffixed with `'font.svg'` or `'img.svg'` strings.


## Project Structure
```
|-- config                         // project config folder
|  |-- helpers.js                    // helper functions
|  |-- postcss_plugins.js            // postcss plugins initializations
|  |-- webpack.common.js             // common webpack config
|  |-- webpack.dev.js                // extend common config for dev build
|  |-- webpack.prod.js               // extend common config for prod build

|-- server                        // server mocking client-server interraction
|  |-- db.json                      // data base. see https://github.com/typicode/json-server

|-- src                           // source code
|  |-- css                          //
|  |  |-- index.css                 // styles entry point
|  |-- fonts                        //
|  |  |-- some font folder          //
|  |  |-- index.css                 // font css entry point
|  |  |-- font itself               // name `should be suffixed` with `.font` str:  `font_name.font.(ttf|woff|woff2|eot|svg)`
|  |-- images                       // svg images `should be suffixed` with `.img` str: `img_name.img.svg`
|  |  |-- svg-sprite                // svg sprite sources
|  |-- html                         // template, use template engine Pug
|  |  |-- blocks                    // reused blocks
|  |  |-- laoyts                    // page layouts
|  |  |-- pages                     // page templates
|  |-- js                           //
|  |  |-- index.js                  // app entry point
|  |  |-- polyfills.js              // polyfills
|  |-- static                       // some static files

|-- .babelrc                        //
|-- .editorconfig                   //
|-- .eslintrc                       // eslint configuration
|-- .gitignore                      //
|-- build.js                        // build production script
|-- package.json                    //
|-- README.md                       //
|-- start.js                        // build development script
|-- stylelint.config.js             //  configuration
|-- webpack.config.js               // webpack configuration entry point
|-- yarn.lock

|-- build                         // build folder
|  |-- assets                       // browser assembled assets
|  |  |-- css                       //
|  |  |-- fonts                     //
|  |  |-- images                    //
|  |  |-- js                        //
|  |-- static                       // some static files
|  |-- index.html                   //
```

## npm scripts
- `npm start or npm run start` - assemble dev build and launch dev server at http://localhost:8080/
- `npm run start-server` - launch json-server at http://localhost:3000/
- `npm run build` - assemble production build
- `npm run lint` - code style check
- `npm run lint-js` - js code style check
- `npm run lint-css` - css code style check
- `npm run sprite` - generate svg sprite, path to source files ./src/images/svg-sprite, path to the result file 
./src/images/svg-sprite-img.svg
