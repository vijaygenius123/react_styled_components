# React Styled Components

## Setup React App From Scratch

We need the following to build a react app from scratch
1. index.html
2. Support for ES6
3. webpack
4. Root component
5. react-hot-loader

## Install babel

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-react @babel/preset-env
```

Setup .babelrc 

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```