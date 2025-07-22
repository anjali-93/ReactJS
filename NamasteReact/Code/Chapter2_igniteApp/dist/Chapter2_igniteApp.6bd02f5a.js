// <div>
//   <h1>Hello World! Using React</h1>
//   <div id="parent">
//       <div id="child">
//           <h1>I am an H1 tag</h1>
//           <h2>I am an H2 tag</h2>
//       </div>
//   </div>
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World! Using React"); //{} ->attributes
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag")
    ])
]);
console.log(heading); //  React Element is an Object
//  Get the root Element
const root = ReactDOM.createRoot(document.getElementById("root"));
//  Render the heading to the root Element
root.render(parent); //rendering React Element to the DOM

//# sourceMappingURL=Chapter2_igniteApp.6bd02f5a.js.map
