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

## Simple React App Setup

Install react and react-dom 

```bash
npm install --save react react-dom
```
In src Create
1. index.js
2. App.js 
3. App.css 

In App.js Create a simple component like below

```css
.App{
    margin: 1rem;
    font-family: Arial, 'sans-serif';
    color: #222222;
}
```


```js
import React from "react"
import "./App.css"

const App = () => (
    <div className='App'>
    <h1>Hello World </h1>
    </div>
)
```

In index.js
```js
import React from "react"
import ReactDOM from "react-dom"
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))
```

## Setup Webpack

Install the below packages

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server css-loader style-loader babel-loader
```

Create a webpack.config.js file with below configuration

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/env"]
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist',
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

Run the below command to run the dev server
```bash
npx webpack-dev-server --mode development
```

## Setup Hot Reloading

```bash
npm install react-hot-loader
```
In App.js
```js
import React from 'react';
import { hot } from 'react-hot-loader'; <- New
import './App.css'

const App = () => (

    <div className="App">
        <h1>Hello World !!</h1>
    </div>
)

export default hot(module)(App); <- Changed
```