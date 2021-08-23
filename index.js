import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root'));
ReactDOM.render(<h1>test!</h1>, document.getElementById('test'));

let name = 'Harsha';
let el = <h1>Hello, {name}</h1>;
ReactDOM.render(el, document.getElementById('name'));

const x = 'myClass';
el = <div className={x} />;

let counter = 0;

function show() {
  counter++;
  el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById('counter'));
}
setInterval(show, 2000);
//calls show every 2 seconds
//only counter div gets uodated

function Hello() {
  return <h1>Hello component.</h1>;
}
//hello is a functional component
el = <Hello />;
ReactDOM.render(el, document.getElementById('compo'));

class classComp extends React.Component {
  render() {
    return <h1>Hello, classComp.</h1>;
  }
}

function propTest(props)
