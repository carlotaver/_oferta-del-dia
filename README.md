Oferta del dia

Playing with React, Firebase and friends.
space_invaderrobotrocket Clone, install... GO rocketrobotspace_invader

❯ git clone git@github.com:davidgchaves/oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm install

0. Installation and First Steps
   How to install Node

Since we are using fish shell, we need to:

    Install NVM

❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

    Install fish-nvm

❯ fisher add FabioAntunes/fish-nvm

    Install Node 8 with NVM

❯ nvm install 8
❯ node --version
v8.12.0
❯ nvm alias default 8.12.0

How can I sync the project with a remote GitHub repository

❯ git remote add origin git@github.com:davidgchaves/oferta-del-dia.git
❯ git push -u origin master

More tools

    React Developer Tools extension for Firefox.
    CMDer: Command Line Emulator for Windows.
    Create React App 2

Troubleshooting

Try

❯ rm -rf node_modules/
❯ rm -rf package-lock.json
❯ npm install
❯ npm start

1. Intro to React

   Everything in react is a component!
   A component is a reusable piece of code.
   Webpack is a bundler.

How to declare a component

Both are equivalent

class Dave extends React.Component {
render() {
return <p>What do you think you are doing, Dave?</p>;
}
}

const Dave = () => {
return <p>What do you think you are doing, Dave?</p>;
};

Component structure

// IMPORTS
import React from "react";

// COMPONENT
class Dave extends React.Component {
render() {
return <p>What do you think you are doing, Dave?</p>;
}
}

// EXPORT
export default Dave;

To JSX or to not JSX...
With only one tag

Both are equivalent

<p>What do you think you are doing, Dave?</p>

React.createElement("p", {}, "What do you think you are doing, Dave?");

With nested tags

Both are equivalent

<div>
  <p>What do you think you are doing, Dave?</p>
</div>

React.createElement(
"div",
{},
React.createElement("p", {}, "What do you think you are doing, Dave?")
);

JSX Gotchas!
Use className instead of class

return <p className="my-class">What do you think you are doing, Dave?</p>;

Beware ASI (Automatic Semicolon Insertion)

If you leave return alone in one line a semicolon is automatically inserted! Use return ( .... ).

return (

  <div>
    <p className="my-class">What do you think you are doing, Dave?</p>
  </div>
);

2. props and state

   state: where the data lives.
   props: a way to get data (state) into a component.

3. Stateless Functional Components

Five of them are equivalent

class Header extends React.Component {
render() {
return (
<h3 className="tagline">
<span>{this.props.tagline}</span>
</h3>
);
}
}

const Header = props => {
return (
<h3 className="tagline">
<span>{props.tagline}</span>
</h3>
);
};

const Header = ({ tagline }) => {
return (
<h3 className="tagline">
<span>{tagline}</span>
</h3>
);
};

const Header = props => (

  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
);

const Header = ({ tagline }) => (

  <h3 className="tagline">
    <span>{tagline}</span>
  </h3>
);

4. Routing and Routers

There's at least 3 great options for routing in React:

    react-router
    next.js
    @reach/router

We are going to use @reach/router but there's a branch with react/router too here

5. Events in React

Synthetic Events in React

Hey React! When somebody clicks the button, execute this (handleClick) point_down function, please:

<button onClick={this.handleClick}>

6. Binding this inside a Component

Binding our own methods/functions inside a component.
Method 1: Inside the constructor

class StorePicker extends React.Component {
constructor(props) {
super(props);

    this.goToStore = this.goToStore.bind(this);

}

goToStore(event) {}
}

Method 2: Declare a property instead of method/function inside the component

class StorePicker extends React.Component {
goToStore = event => {};
}

Remember: if you must access this inside a custom method/function in a component, you need to bind this with Method 1 or even better using Method 2.

7. State in React

   State is a JavaScript Object that lives inside a component and stores all the data that the component and probably its children need.
   State is just a JavaScript Object that holds data.

React philosophy: Update the data (state) and let it React take it and update components for us.

You can never pass data up, you can only pass data down.

Functions that update state and the state itself need to be in the same component.

8. Managing secrets with .env

Create a .env file in the root of your project (same directory as package.json) and write there your secret keys:

REACT_APP_API_KEY=<Your API key>
REACT_APP_API_SECRET=<Your API secret>

Very important: You need to prefix every secret with REACT*APP*.

Use it from JavaScript like this:

process.env.REACT_APP_API_KEY;
process.env.REACT_APP_API_SECRET;

And remember to .gitignore the .env file!!!

9. Component Lyfecicle

Check out React Docs about React.Component Lifecicle. We are using:

    ComponentDidMount
    ComponentDidUpdate
    ComponentWillUnmount

V. Cool tricks

Check out the return null trick from inside a render() method in a component.

Order.js

if (!fish) return null;

W. Cool functions/methods

    JSON.stringify
    JSON.parse

X. Production build

Just run point_down

❯ npm run build

Deploying to now (CURRENTLY BROKEN)

    Now — Global Serverless Deployments
    Create React App Example

❯ npm install -g now
❯ now -v
12.1.3

Change start script to dev script.

"scripts": {
"dev": "react-scripts start"
}

Create a now.json file at the root of your project

{
"version": 2,
"builds": [{ "src": "package.json", "use": "@now/static-build" }],
"routes": [
{ "src": "^/static/(.*)", "dest": "/static/$1" },
{ "src": ".*", "dest": "/index.html" }
]
}

Create a custom alias point_down

❯ now alias https://oferta-del-dia-ib9i5t5ue.now.sh obradoiroTeoFTW

You can access your site through https://obradoiroteoftw.now.sh/.
Deploy to Netlify (WORKING)

tl;dr point_down

❯ npm run deploy:netlify

When asked for a deploy path: enter build.

Long version point_down

❯ npm install -g netlify-cli
❯ netlify --version
netlify-cli/2.2.1 darwin-x64 node-v8.12.0

Create a \_redirects file point_down

/\* /index.html 200

❯ npm run build
❯ cp \_redirects build/
❯ netlify deploy

When asked for a deploy path: enter build.
