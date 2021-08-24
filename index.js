import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root'));
ReactDOM.render(<h1>test!</h1>, document.getElementById('test'));

let name = 'Harsha';
let el = <h1>Hello, {name}</h1>;
ReactDOM.render(el, document.getElementById('name'));

///////////??????????????
const x = 'myClass';
el = <div className={x} />;
///////////??????????????
let counter = 0;

function Show() {
  counter++;
  el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById('counter'));
}
setInterval(Show, 2000);
//calls show every 2 seconds
//only counter div gets uodated

function Hello(props) {
  return <h1>Hello, {props.name} .</h1>;
}
//hello is a functional component
el = <Hello />;
ReactDOM.render(el, document.getElementById('compo'));

class ClassComp extends React.Component {
  ///render methid shows what the page should show
  render() {
    return <h1>Hello, classComp.</h1>;
  }
}
const el1 = <ClassComp />;
ReactDOM.render(el1, document.getElementById('classcompo'));


function PropTest(props) {
  return <p>Hello, {props.name}!</p>;
}

const el2 = <PropTest name="Nadia" />;
ReactDOM.render(el2, document.getElementById('propex'));


function Test(props){
  return <p>{"A" + props.title}</p>;
}

el = <Test title="X"/>;
ReactDOM.render(
  el, 
  document.getElementById('propTest')
);

function App(){
  return <div>
    <Hello name="Satwik"/>
    <Hello name="Sai"/>
    <Hello name="HARSHA"/>
    </div>;
}

el = <App />;
ReactDOM.render(
  el, 
  document.getElementById('CompInComp')
);

class PropInComp extends React.Component {
  render(){
    return <p>Hello, {this.props.name}</p>;
  }
}
el = <PropInComp name="Harsha prop" />;

ReactDOM.render(
  el,
  document.getElementById('propInComp')
  )

  function Item(props) {
    return <div>
    <b> Name: </b> {props.name} <br />
    <b>Price: </b> {props.price}
    </div>;
  }

  class ItemApp extends React.Component{
    render(){
      return <div>
        <Item name="cheese" price="4.99" />
        <Item name="Bread" price="7.99" />
        <Item name="Milk" price="9.99" />
        </div>;
    }
  }
   
  el = <ItemApp />;

  ReactDOM.render(
    el,
    document.getElementById('ItemApp')
  );

  class StateEx extends React.Component {
    state = {
      name: "James"
    }

    render() {
      return <h1> Hello {this.state.name} </h1>;
    }
  }

  el = <StateEx />;
 
  ReactDOM.render(
    el,
    document.getElementById('StateEx')
  );

  class Counter extends React.Component {
    state = {
      counter: 0
    };
    increment = () => {
      this.setState({counter: this.state.counter + 1});
    };
    render() {
      return <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        </div>;
    }
  }

  el = <Counter />;
  ReactDOM.render(
    el,
    document.getElementById('SetStateEx')
  );