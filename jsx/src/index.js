// import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
    const App = () => {
        return (
            <div>
            <h1>Hi there.</h1>
            </div>
        );
    };

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
