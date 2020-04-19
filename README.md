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

