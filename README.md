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
3. Functional Stateless Components
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
