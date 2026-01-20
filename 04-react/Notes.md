# React

- React is a javaScript library, which is used to build user interface;
- React Js is developed by facebook by Jordan Walke;

# Scoffold

- scoffold is self folding is the process of generating a basic project structure
- including Auto-generated folders & boilerplate automaticllay;

To create react application we can use `CRA` or `vite` or `parser` tools etc;

syntax:
npm create-react-app ProjectName -- create scoffold
npm create vite@latest ProjectName -- create scoffold

# Package Json:

- package.json → dependency config
- It is a configuration file for npm package which means this file maintain the version of npm packages.

package.json
├─ dependencies
├─ scripts
└─ versions (^ ~)

react: ^18.2.0
-> allow minor updates
-> block major breaking changes

tells:

> What libraries your app needs
> Which versions
> How to run/build app

# Package-lock-Json:

- package-lock.json → version lock
- Locks down the exact versions of all dependencies and their nested sub-dependencies to ensure consistent installations across all environments.

responsible for:

> Locks exact versions
> Same app runs same everywhere
> Avoids “works on my machine” issue

# Node-Modules(Huge size)

- node_modules → dependency database
- This folder is like a database for react applications whicih means it has all the libraries code;

Note:

- While deploying the react application no need to push node modules to the production beacuse it can be re-installed;

# Git-Ignore(will NOT go to GitHub)

- The files which we don't want to push to git-hub, such files can be maintained in gitignore file;

# Module Bundler:

- It is a tool used to combine all the html,css,js files into single file

Ex: Webpack, parcel, vite

Example:

[JS + JSX + CSS + Images]
│
Webpack / Vite / Parcel
│
bundle.js

# webpack (Webpack/Vite bundles files)

- Webpack is commonly used with React to processes, bundle, and manage a project;
- like JavaScript, JSX, CSS, and images into optimized files for the browser.

# NPM

- It is a package manager
- It is a software repositoty of JS packages;

# NPX

- NPX stands for node package execute;
- npx = run without permanent install;
- It is tool which comes with NPM, to run a package once not without installing permanently;

# Operator Caret (^):

- used to show minor updates happening automatically

Ex:

"react": "^18.2.0"

Meaning:

> allow minor updates
> block major breaking changes

# Tilde operator (~)

- it is used to show major updates happening automatically

Ex:

Syntax Example: "react-scripts": "~5.0.0"

Meaning: Install any version that is greater than or equal to 5.0.0 but strictly less than the next minor version (5.1.0).

# JSX syntax

```jsx
import React from "react";
import ReactDOM from "react-dom/dist";

// JSX code

console.log(h1Tag); //object

let rootEle = document.getElementById("root");
let root = ReactDOM.createRoot(rootEle);
root.render("h1Tag");
```

# JSX (Browser cannot understand JSX)

- JSX is a syntax extension for Java script, which is commonly used with react;
- It allows us to write code like html syntax in JS files;

Note:

- JSX looks like html but it is not;

# Babel (Translator)

- Babel converts JSX → JS
- Babel is a java script compiler;
- convert new ES Modules(ES6) into older JavaScript (ES5) that older browsers can understand.

# Component:

- React is a compoent based architecture;
- Component is a small peice of user interface;
- components are reusable building bocks;

# Class based component:

```jsx
 import { component } from react;

class App extends component
{
  render()
  {
    return <h1>This is class component</h1>
  }
}
export default app;

```

```jsx
let app = () => {
  return (
    <div>
      <h1>App Component</h1>
      <h2>This is Heading Element</h2>
    </div>
  );
};
export default app;
```

Note: From JSX we can return only one parent element

# React Fragments

- React Fragments is feature of react JS which allows us to group multiple child elements without adding additional element or node into real dom;

syntax:

```jsx
import React from "react"; // importing react from rect object, fragment is a property in react obj

let app = () => {
  return <React.Fragment>---------------- ---------------</React.Fragment>;
};

// Or this is easy way to represent

let app = () => {
  return <>---------------- ---------------</>;
};
```

# React expression

- two write any javascript variable or expression in jsx code we should use react expression
- react expression is represented with curly brackets

```jsx
let stuName = "Kiran";

let Student = () => {
  return (
    <>
      <h1>Student Component</h1>
      <h2>{stuName}</h2>
      <h3>{5 + 3}</h3>
    </>
  );
};
```

# CSS application in React

1. Inline
2. Internal
3. external
4. Boostrap
5. fontawsorm

```jsx
import "./student.css";
import "boostrap/dist/css/boostrap.css";
import "font-awesome/css/font-awesome.css";

let stuName = "Kiran";

let Student = () => {
  let fonts = { fontSize: "50px", fontFamily: "Comic Sans Ms, Sans-Serif" };

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        Student Component
      </h1>
      <h2 style={fonts}>{stuName}</h2>
      <h3 className="bg-color text-color">{5 + 3}</h3>
    </>
  );
};
```

Brady - 20,000 intern, 6months
girdhara softwere sol- 20,000

---

# Font-awsome library

# Image handling:

---

Date: 28-Nov-2025

# props (property):

- Props is an object which is used to pass the data from parent compnonent to child component;
- Props are immutable;
- Props has unidirectional data flow;(from parent to child only)

Ex:

```jsx
function Parent() {
  let name = "Priya";

  return (
    <>
      <h1>Hello world</h1>
      <Child sname={name} />
    </>
  );
}

function Child(Props) {
  return (
    <>
      <h1>Hello world</h1>
      <h2> Hello {Props.sname}</h2>
    </>
  );
}
```

---

Date: 29-Nov-2025

# Events()

- We cannot perform event handling using event properties and add event listener method because react is declarative;(we cannot directly perform manupulations on real DOM);

# State

- State is a data which is maintained in component itself;
- State is mutalble, to maintain state in function based component we will use useState hook;

# Hook?

- React hooks are javascript functions which are introducted in react 16.8 version;

1. useState()
2. useEffect()
3. useRef()
4. useContext()
5. useMemo()
6. useCallback()

# Hook rules

1. React hooks must be used in component function;
2. React hooks cannot be used in inside blocks or nested functions;

# useState()

- useState is a react hook, which is used to maintain the state in function based component;
- useState hook is named export in react
- useState hook returns an array;

syntax:

```jsx
let arr = useState();
console.log(arr); // [undefined, fn]
console.log(arr[0]); // undefined
console.log(arr[1]); // fun
```

---

Date: 01-Dec-2025

# How to update state based on previous state

Ex:

```jsx
export function Count() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => {
      return c + 1; // c is having perious state value
    });
  }
  return <></>;
}
```

# children prop

- Children prop is a special property which is created by react;
- the value of children property is the content which is passed between opening and closing JSX tags;
- by using childer prop we can create flexible and reusable components;

Ex:

```jsx


parent comp
----------

return(
    <>
    <Button clickFn = {incQty}>-</Button>
     <h2 className="p-1">
                  {" "}
                  <span>{qty}</span>
                </h2>
    <Button  clickFn = {incQty} >+</Button>

    </>
)


child comp
--------

export default function Button ({clickFn, children}){

   console.log(clickFn) // its value is incQty & decQty
   console.log(children) // -, + symbols

    return(
        <>
        <button onClick = {clickFn}>{children}</button>
        </>
    )

}


```

---

Date: 02-Dec-2025

# index as key

- using index as key value is an anti-pattern because it causes for bugs and performance issues;
- when their is no 'id' property then we should use index as key value;
- when the data is updating & filtering dynamically we should never use index as a key;

# conditional rendering using useState

- using useState we can perform condtional renderdring;

Ex:

let [isLogin, setIsLogin] = useState(false);

function handleLogin(){
setIsLogin(true);
}

{isLogin && <button> click me</button>} // the button is displayed when isLogin is set to true;

# form rendering

- In react forms are rendered not on real DOM, it shall be rendered on react itself ;
- to do that there three steps are followed

1. create state
2. set value
3. update value using event handler

---

Date:

# React form handling:

- Normally froms data will be maintained by real D.O.M itself
- To maintain forms data in react application we need to follow controlled elements technique;
- In react Js controlled components are input elements such as input tag, select tag, textarea tag... who's value is managed by react's state insteared of D.O.M;
- To follow controlled elements technique we have to follow three steps

1. Create a state
2. bind a state with value attribute
3. perform event handling for update the value

# uncontrolled compoent:

- In react un controlled component is a form input element (input, textarea, select....tags) who's value is maintained by D.O.M itself instead of react state;

Ex:

```jsx

let obj = useRef(null);


   console.log(obj);

   function handleSubmit(e){

    e.preventDefault();
     console.log( obj.current.value);

   }


    return (
      <>

        <div className="container mt-4">
          <div className="row">

            <div className="col-3 m-auto">
              <div className='card'>
              <div className = 'card-head'>
              <h3 className = 'bg-success text-white p-2'>Uncontrolled Element</h3>
              </div>
              <div className = 'card-body'>
              <form onSubmit={handleSubmit} >

                <input type = 'text' className="w-100 mb-2" placeholder="Enter Email" ref= {obj} />


              <input  type = 'submit'/>

              </form>  )


```

# useRef:

- useRef is a react hook which is used to access and manupulate D.O.M elements directly;
- useRef hook returns an object with property called `current` the default value of current property is `undefined`;

Ex:

```js
let obj = useRef(null);

console.log(obj);

function handleSubmit() {
  return obj.current.value;
}
```

# Diff b/w is useState and useRef

- useState returns an array
- useState is used to maintain component's own data
- state update causes for components re-rendering;
- when data is updated, it re-render the whole html code
- the main use of useState hook is to maintain state of react application; t

- useRef returns an obj;
- useRef is also use to maintain compoent's data;
- current property value updates does not cause for components re-rendering;
- data update doen't cause re-rendering;
- the main use of useRef hook is to access and manipulate DOM elements directly;

Ex:

```js

let [count, setCount] = useState(0);
let {current} = useRef(0);

function handleClick1(){

    setCount(count + 1);

}

function handleClick2(){

    current = current + 1;


}

<h1>{count}</h1>
<h1>{current}</h1> // no update in UI
<button onClick = {handleClick1}>Click me</button> //when it is clicked on UI also auto updated
<button onClick = {handleClick2}>Click me</button> // when clicked data is updated, nut not UI
```

# Passing data from child to parent:

- Create a parent component;
- Creat a child component;
- configure parent comp in app comp and config child in parent comp
- create a state in parent comp, then send that data to child child comp as a prop;
- create a state in child comp, then send that dat to parent comp;

- to send data from child ot parent compoent, wwe need to follow few steps

> create a function in parent compoent
> --> pass the function rref as a prop to child comp
> --> pass the data form child comp as arg to functinon
> --> use the data in the parent compoent

---

Date: 10-Dec-2025

# Props Drilling:

App
|
Comp-1
|
Comp-a
|
Comp-b
|
Comp-c

- Props drilling in react is a problem in react application
- Sending a data(props) from the top most parent component to the least most childeren component, this situation is known as props drilling;

# Advantage of props drilling:

- If we need the same data in all the configured nested components then we can create the data in top-most parent component and we can pass it as a props to the child components;

# disadvantages

- The data we are sending from the top most component that will be recived and sending to the next component which means all the intermediate components must receive and send the props;

- If any changes happens or made in the parent data every child component which is connect will re-render in the web page, this process can decrease the performance of the react application;

- To avoid props drilling we have some ways

1. Component composition
2. context API
3. Global State Management Libraries(React-redux, reduxtool kit, Zustard)

# Component composition

- component compoisiton is a technique calling diffrent component by using the children props
- To props drilling we can use this technique;

Example:

```jsx

//app --> Dashboard --> Home --> Movies --> MovieList

let data = [
  {id:101, name: 'LEO'},
  {id:102, name: 'RRR'},
  {id:103, name: 'KGF'},
]


function App() {

  return (
    <>

     <Dashboard>
      <Home><!-using the data from Dashboard using children property->
        <Movies>
          {data.map((movie)=> <MoviesList key = {movie.id} movie = {movie}/>)}
        </Movies>
      </Home>

     </Dashboard>

    </>
  );
}

export default App;
```

---

Date: 12-12-2025

# Context API:

- Context API is a way for react application to efficiently pass a globale state or varibale to every component;

- Steps to use context API:

1. Create context
2. Provide context
3. use context

- Context api is used to avoid props drilling

# Creating a context

- We can a context object using create context from react
- this object comes with the provider and consumer;

# Providing the context

- Wrap the components that needs access to the shared data with the provider components;
- The provider accepts the value prop which can be any data type;

# consuming the context

- Any component with in the providers three can access the value using consumer component or using useContext hook;

```jsx
import { createContext } from "react";
let ThemeContext = createContext({ bgcolor: "light", textcolor: "dark" });
export default ThemeContext;
```

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

export function Home() {
  let cardTheme = useContext(ThemeContext);
  let [theme, setTheme] = useState(cardTheme);

  let { bgcolor, textcolor } = theme;

  return <></>;
}
```

# How react app render

- App --> Load --> Render --> API data --> Re-render
  initial
  data

- initally what ever the data app has that will be loaded;
- that data will be rendered, then after once api data is fetched then app will be rerendered again;

# How infinite re-render happen when fetch and useState is linked:

Ex:

```jsx
function FetchData() {
  let [data, setData] = useState("");

  fetch("http....")
    .then((res) => res.JSON())
    .then((data) => setDate(data))
    .catch((error) => {
      console.log(error.message);
    });

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
```

- fetching will take some time, before that once the app is rendered once, once the data is fetched the using setDate() the data is set to state, this trigger the useState() again and cause re-render.. this happens infinite times..

- To avoid this behavious useEffect() is introduced;

# useEffect():(used to stop infinite re-render)

- useEffect hook are used to perform side effects in function based component
- Side effects are fetching the data from API, performing DOM manupulations directly, using timerfunction directly etc...
- always useEffect function will after the component is rendered;
- It acts like pure function;

```jsx
// useEffect with out dependency array
useEffect(() => {}); // will run every when  every rerender

// useEffect with dependency array
useEffect(() => {}, []); // for only once after the inital render of the application

// useEffect with state and props in dependency array
useEffect(() => {}, [state, props]); // will run after the inital render and as well as any of the element in the dependency array updates;

// useEffect with clean up function and with state and props in dependency array
useEffect(() => {
  return () => {}; /// clean up function
}, [s / p]);
```

# Application of useEffect():

```jsx
export default function FetchDate() {
  let [data, setData] = useState("");

  useEffect(() => {
    fetch("http...")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((item) => {
        return <h1>{item}</h1>;
      })}
    </>
  );
}
```

---

# Routing:

- Routing in React is Primarily handled by the external library react Router, which enables navigation between different components in a single-page application (SPA) without requiring a full page reload;

syntax:

- npm install react-router-dom

# BrowserRouter:

- The most common router type for web applications; it uses the HTML 5 history API to keep the UI in sync with the URL. It wraps the entire application;

# Routes:

- The most common router type for web applications; it uses the HTML5 history API to keep the UI in sync with the URL. It wraps the entire application.

# Route:

- Defines a mapping between a specific URL path and the element (component) to be rendered when that path matches the current URL;

# Link / NavLink:

- Components used to create navigation links within the app
- They render as anchor (<a>) tags but prevent the default browser behavior of a full page reload, allowing for client-side routing;

# Outlet :

- Used in nested routing to specify where a child route's component should be rendered inside a parent component's layout.

# useNavigate hook:

- Allow for programatic navigation (e.g., redirecting a user after a form submission or login)

# useParams hook:

- Used to access dynamic segments (parameters) from the URL, which is useful for dynamic routing scenarios like viewing product details (/products/:id);

---

# Single page Application (SPA)

- A single page application is a web app that loads a single HTML page and dynamically update context as users interact , without full page reload

Ex:

- GMAIL
- NETFLIX
- INSTAGRAM

# Rendering

- In React, rendering is the process where React asks yours components to description what the UI should look like based on their current state and props;

process:

1. Triggering a render
2. Render the component
3. Commit to the DOM

# Virtual DOM

- The Virtual DOM in React is a light weight in memory representation( a internal copy) of the actual browser. Document object Model(DOM);

- When a render is triggered, React call the function component to get a snap-shot of the UI it returns(USUALLY as JSX)

# Reconciliation

- Reconciliation is the proecess by which React efficiently update the actual DOM to match changes in the component; state or props

- React compess the old vs new VDOM tree and updating the change to the Real DOM

# Diffing (Differentating Algo)

- React Diffing algorithem is a core part of its Reconciliation process, whihc efficiently update the actual DOM by comparing two versions of light weight virtual DOM to determine the minimum number of chnages required;

# Custom Hook

- A custom hook is a normal JAVA SCRIPT FUNCTION, whose name starts with use.

- You can create a custome hook, when you want to repeat same logic in multiple components
- When you want to repeat logic from UI.

EX:

1. Fetching Data in multiple components
2. Handling Form Logic
3. Themes handling
4. For Toggle tab
5. For authentication

---

Date: 20-12-2025

# useReducer() -hook:

- The useReducer hook in React is an alternative to the useState that helps manage complex state logic in function components;

- It is useful when state transaction depend in the previous state;

- The useReducer hook is modeled after the Redux pattern and involves three core concepts: a reducer function, an initial state, and a dispatch function;

syntax:

- let [state, dispatch] = useReducer(reducer fun, intial state);

reducer fun syntax

- function Reducer (state, action){
  console.log(state); // {count : 0}
  console.log(action);// {type : 'INC', payload : 10 }

}

Example:

```jsx

let initState = {count : 0};

let [state, dispatch] = useReducer((state, action)=>{

  switch action.type{
    case "INC" :
    return {count : state.count + 1}
    case 'DEC':
      return {count : state.count -1 }
    case 'RESET':
      return {count : 0 }
    case 'INCBY':
      return {count : state.count + action.payload}
      default
      return state
  }

}, initState)


<button onClick={()=>dispatch({type:'INC'})}></button>
<button onClick={()=>dispatch({type:'DEC'})}></button>
<button onClick={()=>dispatch({type:'RESET'})}></button>
<button onClick={()=>dispatch({type:'INCBY', payload: 10})}></button>


console.log(state.count);// inc->1, dec-> 0 ,


```

------------------------------------------------------------------------------------------------------------
# USEREDUCER()

* Is alternative to useState for managing component state, especially when dealing with more comlpex logic or when state updates depend on the previous state;


SYNTAX:
const [state, dispatch] = useReducer(reducer, initialState);

Reducer Function: This pure function takes the current state and an action object as arguments and returns the new state. It should not directly modify the original state.


Action: An object that describes what happened. By convention, it typically has a type property and can include a payload for any necessary data.

Dispatch Fucntion: Returned by useReducer, this function is used to send actions to the reducer, triggering state updates.



# REDUX

* Redux is a Javascript library for predictable global state management;
* It provides a centralized store for your application's data, allowing components to access and update state regardless of their position in the component tree.


Installation:
npm install redux react-redux

# REACT-REDUX 
* Redux itself is a standalone state management library that can be used with any UI framework, React-Redux provides a streamlined and optimized way to connect your react component to the redux store.

1. Store:
* The single source of truth for your applications state. It holds the entire state tree of your application.

2. Actions: 
* Plain Javascript objects that describe what happened in the application. They have a type property and may include a payload with data.

3. Reducers:
* Pure function that take the current state and an action as arguments, and return a new state. They specify how that application's state changes in response to actions.

4. Dispatch: A function used to send actions to the redux store, triggering state updates through the reducers.

5. Provider: A component from react-redux that makes the redux  store available to all connected components within its subtree.

6. useSelector Hook: A hook form react-redux that allows functional compoents to extract specific pieces of data from the redux store.

7. useDispatch Hook: A hook from react-redux that provides access to the dispatch function, enabling components to dispatch actions;


# REDUX_TOOLKIT

* Redux Toolkit (RTK) is offical, opinionated, batteries-Included toolset for efficient Redux development;
* It simplifies Redux development by addressing common pain and reducing boilderplate code.

1. ConfigureStore:  It simplefies the creation of reducers and actions for a specific part of your state.
2. CreateSlice:
* It simplefies the creation of reducers and actions for a specific part of your state.
* It takes an Object with name, initalState, and reducers properties.
* It automatically generates action creatores and action types based on the reducer/s name and the defined reducer functions.



------------------------------------------------------------------------------------------------------------

Date:

# class component



# props fetching in class component

```jsx
--> App.jsx

import { student } from 'components/Student'

function App(){
  return (
    <>
    <Student name= 'Bhanu' age={21}/>
    </>
  )
}


export default App

-------------------------

import { Component } from 'react';

export class Student extends Component

{
  constructor(props){
    super(props)// Essential for this.props to be defined in the constructor
  }

  render()
  {
    return(
      <>
      <h1>{Student Name Is {this.props.name}}</h1>
       <h2>{Student Age Is {this.props.age}}</h2>
      </>
    )
  }

}


```

# State in class based component

```jsx
import { Component } from 'react';

export class Employee extends Component

{
  constructor(props){
    super(props)

    this.state = {
      emp: {
        name : "Anil",
        age : 21
      }
    }
  }

  render()
  {


    return(

      let {name, age} = this.state.emp;
      <>
      <h1>{Employee Name Is {this.state.emp.name}}</h1>
       <h2>{Employee Age Is {this.state.emp.age}}</h2>
       <hr/>
       <h1>{Employee Name Is {name}}</h1>
       <h2>{Employee Age Is {age}}</h2>
      </>
    )
  }

}

```

# state managment in class based component


```jsx

import { Component } from 'react';

export class WishMessage extends Component

{
  constructor(props){
    super(props)

    this.printMsg = this.printMsg.bind(this);
    this.state ={msg: 'Hello'}
    
  }

  printMsg()
  {
    this.setState({msg: 'Good Evening'})
  }

  render()
  {


    return(
      <>
     <h1> Wish Message is :- {this.state.msg}</h1>
     <button className="btn btn-secondary" onClick = {this.printMsg}>submit</button>
      </>
    )
  }

}

```



------------------------------------------------------------------------------------------------------------
Date: 27-12-2025

## Component life cycle:

* Component life cycle describes the various stages a component goes through from its creation to removal from the DOM 

* There are mainly three phases in component life cycle:

1. Mounting
2. Updating
3. Un Mounting

# Mounting Phase:

* Mounting phase happens when the component is inserted into the DOM for the first time;
* In mounting phase there are few methods will get exicute 

1. Constructor()
2. Render()
3. ComponentDidMount()

* Constructor is used to initialize the state any binding event handlers
* Render method is overidden method which is used to return JSX elements to be displayed in the web page;
* ComponentDidMount will be exicuted after the component is mounted to the DOM

 NOTE: to perdorm side effects in react application we use ComponentDidMount() method


# Sideeffects:
* It means dealing with outside world of component scope;

# Updating Phase:

* The updating phase in react is the process where a component re-render due to changes in its state or props.
* This phase enusures the DOM is synchronized with the latest data and UI changes.

# render():

* Called to re-render the components's UI with the updated state and props. It must be a pure function.

# componentDidUpdate(prevProps, prevState, snapshot):
* This will be called immediately after the component has been updated and re-rendered in the DOM.
* this function gets invoked once after the render() function is executed after  the updation of the state or props.

# Unmounting Phase:
* This is the final phase of the lifecycle of the compoenent, which is the phase of unmounting the component
 from the DOM. The following function is the sole member of this phase.


# componentWillUnmount():
* this function is invoked before the compoenet is finally unmounted from the DOM, i.e., this function gets invoked once before the component is removed from the DOM, and this denotes the end of the lifecycle.

--------------------------------------------------------------------------------------------------------


# USEEFFECT with cleanup function
* To prevent memory leaks by stopping effects(like fetching, data, setting intervals or events listeners) that might continue running after the component is gone;

* You return a function from within useEffect; this returned function is the  cleanup function;

* Before the component unmounts, and also before the next effect runs if dependencies change;


# UseCase:

-> canceling ongoing fetch request
-> clearing setTimeOut or setIntervals
-> Removing eventlisteners (e.g window.remove Eventlistener)
-> closing webSockets or subscriptions connections;























