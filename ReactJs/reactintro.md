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
