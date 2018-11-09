Routing and Routers

There's at least 3 great options for routing in React:

    react-router
    next.js
    @reach/router

We are going to use @reach/router but there's a branch with react/router too here

Notas Intro to React
-Everything in React is a component

- A component is a reusable piece of your website.
- Webpack is a bundler

## `\$ capturar un obxecto

### compoñentes con funciones(staless functional components)

`````jsx
class Header extends React.Component {
  render() {
    return (
    <h3 className="tagline">
    <span>{this.props.tagline}</span>
    </h3>
    );
  }
};


## Props.

Props.similares a los atributos en HTML.una forma de (get data)(state) un componente.
state:donde viven los datos

## Como declarar un componente

Ambos son equivalentes

````jsx
class Dave extends React.Component {
  render() {
    return <p>What do you think you are doing,Dave?</p>;
  }
}
```jsx
const Yo = () => {
  return <p>What do you think you are doing, Yo?</p>;
};


# Oferta del dia

Playing with React, Firebase and friends.

## 👾🤖🚀 Clone, install... GO 🚀🤖👾
`````

❯ git clone git@github.com:carlotaver/oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm install

```
## 0. Installation and First Steps

### How to install Node

Since we are using [fish shell](https://fishshell.com/), we need to:

1. Install [NVM](https://github.com/creationix/nvm)
```

❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```
2. Install [fish-nvm](https://github.com/FabioAntunes/fish-nvm)
```

❯ fisher add FabioAntunes/fish-nvm

```
3. Install [Node 8](https://nodejs.org/en/) with NVM
```

❯ nvm install 8
❯ node --version
v8.12.0
❯ nvm alias default 8.12.0

```
### How can I sync the project with a remote GitHub repository
```

❯ git remote add origin git@github.com:carlotaver/oferta-del-dia.git
❯ git push -u origin master

```
### More tools

- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) extension for Firefox.
- [CMDer](http://cmder.net/): Command Line Emulator for Windows.
- [Create React App 2](https://github.com/facebook/create-react-app)
```
