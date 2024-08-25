1. As we discussed REACT is basically a frontend library based on Javascript Programming Language and Typescript Programming language. React has been written by the company Facebook (now , known as Meta) to add the feature of notifications in the social media webapplication of Facebook and solve other problems as well. Change in individual LEGO blocks would repaint other LEGO blocks of the webpage, making the webpage slower.
2. React is not a framework 
3. React is not a javascript technology as well
4. React is simply a library in javascript
5. React was launched in 2013 and was open-sourced on 2015
6. VIRTUAL DOCUMENT-OBJECT MODEL
7. When any part of the component was changed in basic HTML CSS and Vanilla Javascript based webapplications , like changing the color of a button with some className or class id with the document.querySelector(), there are changes on the other components as well , the other components repaints themselves and causes Document Object Model - Rerender
8. The Document Object Model (DOM) rerender is the process of recreating the visual representation of a web page or application when changes occur in the underlying data or state. This can happen when:

    State changes: Application state updates, such as user input or API responses.
    Props updates: Changes to component properties (props) in React.
    DOM mutations: Direct changes to the DOM, like adding or removing elements.

When the DOM rerenders, the browser:

    Recomputes styles: Calculates new styles based on updated data or state.
    Updates layout: Rearranges elements according to new styles and content.
    Repaints elements: Visually updates the elements on the screen.

To minimize DOM rerenders and improve performance:

    Use virtual DOM (like React's virtual DOM).
    Optimize component re-renders (e.g., use shouldComponentUpdate).
    Batch updates (e.g., use requestAnimationFrame).

9. when there are lot of changes in a Vanilla Javascript based website , there is too much repaint on the affected as well as unaffected components of the website as well. This slows down the website, Now to solve this problem as well React plays a crucial role.
10. Virtual Document Object Model is the same exact duplicate copy of the real Document Object Model for a webapp's frontend. 
11. Virtual Document Object Model: Virtual DOM (VDOM)
Imagine you're building with LEGO blocks. Each block represents a part of your web page (like a button or text). When you make changes, you don't rebuild the entire LEGO structure; you only replace the changed blocks.
The Virtual DOM (VDOM) works similarly:

    Replica: A lightweight, in-memory representation of your web page's structure (DOM) is created.
    Changes: When your application's state changes, the VDOM is updated instead of the real DOM.
    Comparison: The VDOM is compared to its previous version to determine what changed.
    Efficient update: Only the changed parts of the real DOM are updated, minimizing the number of DOM mutations.

Benefits

    Faster updates: Reduces the number of DOM mutations, making updates faster.
    Improved performance: Less computational work for the browser.
    Easier debugging: Changes are contained within the VDOM, making it easier to identify issues.

Popular libraries using VDOM

    React
    Vue.js
    Ember.js

Think of the VDOM like a "draft" version of your web page, allowing you to make changes without directly modifying the live page. This approach makes building dynamic user interfaces more efficient and scalable!
12. Change or update in LEGO Blocks or any specific id , class or component would not cause the other parts and LEGO Blocks of the webpage to repaint.In virtual Document Object model , the LEGO BLOCK which is updated or changed will be repainted only , the other LEGO blocks remain unaffected.The part of the webpage where there is change , is rendered.
13. Functional UI
14. Operational and functional User Interfaces are built mostly on react bt large companies
15. React Animations and three JS support makes the webapp look more user-friendly and interactive.   
16. Mastering Document-Object Model
17. Mastering Arrays ,Objects ,Arrow Functions and Symbols.
18. Matering Map , Filter and Reduce as map is required to render arrays of data , while writting props in React which sends data from parent to children component in REACTJS.
19. Mutability and immutability in Javascript and Typescript
20. Destructuring in Javascript
21. TSX and JSX: JSX is similar to html and calculations can take place within {}.
22. {2+2} = 4 in JSX , 2+2 is 2+2 in HTML
23. Everything Big is a Component, The full webpage is an app component (similar to main div in html),the navbar , the sidebar,the hero section , the various sections within are individual components each,In ReactJS, a component is a reusable piece of code that represents a UI element or a group of UI elements. Components are the building blocks of a React application and can be classified into two main categories:

1. Functional Components

    Defined as a JavaScript function
    Takes in props (short for properties) as an argument
    Returns JSX (a syntax extension for JavaScript) elements
    State is managed using hooks (e.g., useState, useEffect)

    function Greeting(props) {
          return <h1>Hello, {props.name}!</h1>;
     }

2. Class Components

    Defined as a JavaScript class
    Extends the React.Component class
    Has a render method that returns JSX elements
    State is managed using this.state and this.setState

  class Greeting extends React.Component {
    render() {
       return <h1>Hello, {this.props.name}!</h1>;
    }
  }

Presentational Components: Focus on rendering UI, don't manage state or side effects.

Container Components: Manage state, side effects, and pass data to presentational components.

24. Component can have Data.

25. State of Data (when data is changed in the top component, maybe the app component) is important , State is assumed to be data for conveniencce.

26. Changing state and component will recalculate.

27. Props for sending data to child component. Props in React
In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are read-only and immutable, meaning they cannot be changed by the child component.
Key aspects of props:

    Read-only: Props cannot be modified by the child component.
    Immutable: Props are immutable, meaning they cannot be changed after they are set.
    Passing data: Props are used to pass data from a parent component to a child component.
    Type checking: Props can be type-checked using PropTypes or TypeScript.

How to use props:

    Passing props: Pass props from a parent component to a child component using the JSX syntax.

Jsx

// Parent component
function Parent() {
  return <Child name="John" age={30} />;
}

// Child component
function Child(props) {
  return <div>Hello, {props.name}! You are {props.age} years old.</div>;
}

    Accessing props: Access props in the child component using the props object.

Jsx

function Child(props) {
  return <div>Hello, {props.name}! You are {props.age} years old.</div>;
}

    Destructuring props: Destructure props in the child component for easier access.

Jsx

function Child({ name, age }) {
  return <div>Hello, {name}! You are {age} years old.</div>;
}

Best practices:

    Use props instead of state: When passing data from a parent to a child, use props instead of state.
    Use PropTypes or TypeScript: Type-check your props to ensure they conform to the expected shape.
    Keep props immutable: Avoid modifying props in the child component.

By following these guidelines, you can effectively use props to pass data between components in your React application.

28. effect runs when Document object model is loaded. Effects in React
In React, an effect is a function that runs after rendering a component. It's a way to handle side effects, such as:

    API calls: Fetching data from an API.
    DOM manipulation: Updating the DOM directly.
    Event listeners: Adding or removing event listeners.
    Timers: Setting up timers or intervals.
    State updates: Updating state after rendering.

Types of effects:

    UseEffect: A hook that runs after rendering, replacing componentDidMount, componentDidUpdate, and componentWillUnmount.
    UseLayoutEffect: Similar to useEffect, but runs after all DOM mutations.

When to use effects:

    After rendering: When you need to run code after rendering, such as making API calls or updating the DOM.
    On mount: When you need to run code only once, when the component mounts.
    On update: When you need to run code after updating, such as when props or state change.
    On unmount: When you need to clean up resources, such as removing event listeners.

Example:
Jsx

import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API call
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Run only once, on mount

  return <div>{data.map(item => <div>{item}</div>)}</div>;
}

Best practices:

    Use useEffect instead of componentDidMount: For most cases, useEffect is a better choice.
    Clean up resources: Use the return function of useEffect to clean up resources, such as removing event listeners.
    Avoid side effects in rendering: Keep rendering pure and free of side effects.
    Use dependencies: Pass dependencies to useEffect to control when it runs.

By using effects correctly, you can handle side effects in your React components and keep your code organized and maintainable.

29. effects can be applied when there is a change in state.

30. JSX and TSX in React
JSX (JavaScript XML)

    A syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
    Used to create React elements, which are then rendered to the DOM.
    Files with JSX code typically have a .jsx extension.

Example:
Jsx

const element = <h1>Hello, World!</h1>;

TSX (TypeScript XML)

    A variant of JSX that uses TypeScript instead of JavaScript.
    Allows you to write type-safe React components with HTML-like syntax.
    Files with TSX code typically have a .tsx extension.

Example:
Tsx

const element: JSX.Element = <h1>Hello, World!</h1>;

Key differences:

    Type checking: TSX has type checking, while JSX does not.
    File extension: .tsx for TSX, .jsx for JSX.
    Syntax: TSX requires explicit type annotations, while JSX does not.

When to use each:

    JSX: Use when you're working on a small project or a quick prototype, and you don't need type checking.
    TSX: Use when you're working on a large-scale project, or when you want to take advantage of TypeScript's type safety features.

Best practices:

    Use TSX for new projects: If you're starting a new project, consider using TSX for its type safety benefits.
    Use JSX for legacy projects: If you're working on an existing project that uses JSX, it's okay to stick with it.
    Be consistent: Use either JSX or TSX consistently throughout your project.

By understanding the difference between JSX and TSX, you can choose the best approach for your React projects.

31. React flow and structure:
     How React code is injected in the HTML?
        In basic react, we have build folder , folder containing all the node modules(very important), can be obtained with "npm install react react-dom",
        We have public , src folders as well. public contains the files which needs to be public which is basically the index.html file in which the reract code is injected, manifest.json is required by responsive webapp  in mobiles where we need some meta tags, robots.txt is for search engine associated work. The entire react code is injected in a single index.html page , hence React helps us to create Single - page applications in most of the cases.The manifest.json provides metadata used when the web application is installed on a user's mobile device or desktop. we generally create a div with id: root in the body of index.html. The src folder contains the two files App.js and index.js. 

32. react-dom is implementation of react js code on Document Object Model. react-dom is associated to the concept of virtual DOM which is compared to real DOM and only required elements are changed , repainted and rendered. With the help of createRoot() in reactDOM , we try to pass the document.getElementById('root') , where the root id is present in index.html in public folder.Rendering whatever code we write with root.render where root is a const variable storing the ReactDOM.createRoot(document.getELementById('root')); in index.js file.
33. Javascript XML and Typescript XML are JS + HTML  and TS + HTML to some extent, they are all  required for individual components building.
34. custom tags rendering Javascript files in indec.js
35. react-scripts are responsible for injecting index.js in index.html without injecting any javascript code directly in index.html.
<b> < script defer src = '/static/js/bundle.js'></ script> in head tag is automatically injected in HTML CODE because of react-scripts </b> 
which  adds  ip all the necessary javascript scripts required.

36. In react with vite tooling , react-scripts is not used to inject index.js in index.html , the js file is directly loaded in the html file with <b><em>< script type="module" src="/src/main.jsx"></em></b>.   

37. React.StrictMode :React.StrictMode
React.StrictMode is a wrapper component in React that helps identify potential problems in your application. It does this by:

    Detecting unexpected side effects: StrictMode warns you about side effects that occur outside of React's expected lifecycle methods.
    Detecting legacy context API: StrictMode warns you about using the legacy context API, which is deprecated.
    Detecting deprecated findDOMNode: StrictMode warns you about using findDOMNode, which is deprecated.
    Enforcing strict prop types: StrictMode checks prop types more strictly, helping you catch type errors.

To use React.StrictMode, wrap your app or a part of your app with the StrictMode component:
Jsx


      import React from 'react';

       function App() {
           return (
          <React.StrictMode>
            {/* Your app components here */}
           </React.StrictMode>
        );
       }

Benefits:
    Improved code quality: StrictMode helps you identify and fix potential issues, leading to more robust code.
    Better error messages: StrictMode provides more informative error messages, making it easier to debug.
    Preparation for future React versions: StrictMode helps you prepare for upcoming React versions by warning about deprecated features.

Note: React.StrictMode only works in development mode, not in production mode.
By using React.StrictMode, you can write more maintainable, efficient, and error-free code.

37. React + vite is light-weight in comparison to react because not all react-scripts are imported unless mentioned.

38. In jsx files , we write functions with same name as the custom tag name and within the function , we can return HTML code lines and closing return paranthesis , we need to export default functionname().
39. the function names in jsx and tsx are not same as filename of the .jsx file
40. jsx always return a single element , which could be a div element containing both component custom tag same as function name in the jsx file of the component along with some html code. More than one element of html code needs to be wrapped in some div and that div is to be returned from App.jsx. this div element could be a fragment  <></> as well.
41. Always utilize capitalize names of functions which are actually components of the single-page Applications.
42. jsx file names should start with capital letters and there should be no space while naming this files.
43. Always remember to export functions from jsx files which are to be imported in App.js or App.ts
44. react-dom is created within the memory.
45. Routing: Routing in ReactJS
Routing in ReactJS is the process of navigating between different components or pages in a React application. Here are some key concepts and libraries used for routing in React:
i. React Router
React Router is the most popular routing library for React. It provides a simple and efficient way to handle routing in your application.
ii. BrowserRouter
BrowserRouter is a component from React Router that uses the HTML5 history API to manage client-side routing.
iii. Route
Route is a component from React Router that renders a component when the URL matches the specified path.
iv. Link
Link is a component from React Router that creates a hyperlink to a specific route.
v. Switch
Switch is a component from React Router that renders the first child Route that matches the URL.
Example:

Jsx

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
     );
}

Other Routing Libraries:

    Reach Router: A popular alternative to React Router.
    Next.js: A React framework that includes built-in routing.

Best Practices:

    Use React Router: It's the most widely used and well-maintained routing library for React.
    Use BrowserRouter: It's the recommended way to manage client-side routing.
    Use Link: Instead of using anchor tags, use Link to create hyperlinks.
    Use Switch: To render only the first matching route.

By following these guidelines, you can implement efficient and scalable routing in your React application.  

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

<code> function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}</code>

46. react-router-dom
react-router-dom is a popular routing library for React applications. It provides a simple and efficient way to handle client-side routing.
Key Features:

    Declarative Routing: Define routes using JSX elements.
    Programmatic Routing: Navigate programmatically using the useHistory hook.
    Nested Routes: Create nested routes for complex applications.
    Route Parameters: Pass parameters to routes using URL parameters.
    Query Strings: Pass data using query strings.

Main Components:

    BrowserRouter: The main component that wraps your application.
    Route: Defines a route with a path and a component.
    Link: Creates a hyperlink to a route.
    Switch: Renders the first matching route.
    Redirect: Redirects to a different route.

Hooks:

    useHistory: Provides access to the browser's history API.
    useLocation: Provides access to the current location.
    useParams: Provides access to route parameters.
    useRouteMatch: Provides access to the current route match.

Example:
Jsx

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

Version:
The latest version of react-router-dom is 6.x. Make sure to check the documentation for the version you're using.
Documentation:
By using react-router-dom, you can create scalable and maintainable routing for your React applications.

47. React Redux is a library that connects React to Redux, a state management library. This allows you to manage global state by connecting your React components to the Redux store.

48. Redux Store
The Redux store is the central location that holds the entire state of your application. It's a single object that contains all the data and state of your app.
Key Characteristics:

    Single source of truth: The store is the only source of truth for your app's state.
    Immutable: The store is immutable, meaning it cannot be changed directly.
    Predictable: The store's state is predictable, making it easier to debug and test.

Components of the Store:

    State: The current state of the application.
    Reducers: Functions that update the state based on actions.
    Actions: Payloads that trigger state changes.
    Dispatch: A function that sends actions to the reducers.

How the Store Works:

    Initial state: The store is initialized with an initial state.
    Actions are dispatched: Components dispatch actions to the store.
    Reducers update state: Reducers update the state based on the actions.
    State is updated: The store's state is updated.
    Components are notified: Connected components are notified of the state change.

Benefits:

    Global state management: The store manages global state, making it accessible to all components.
    Predictable behavior: The store's predictable behavior makes it easier to debug and test.
    Scalability: The store makes it easier to scale your application.

By using a Redux store, you can manage your application's state in a centralized, predictable, and scalable way.

49. We can create our own react library as well.

50. Concept of CORS , API fetching , React-Redux with reduce and Interaction of React with Backend are to be covered with illustrations.

