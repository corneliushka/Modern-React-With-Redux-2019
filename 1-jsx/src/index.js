// import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";



// create a react component
    const App = () => {

        const buttonText = {text : "click me"};
        const enterText = "You Have in your account : "

        function getTime() {
            return (new Date()).toLocaleTimeString()
        }

        return (
            <div>
                <div>
                    <div>Current Time:</div>
                    <h3>{getTime()}</h3>
                </div>
                <label className="label" HTMLfor="name">
                    {enterText}
                </label>
                <input id="name" type="text"></input>
                <button style={{backgroundColor: 'black', color: 'white'}}>
                    {buttonText.text}
                </button>
            </div>
        );
        };

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));


/* function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Creates a functional component
const App = () => {
    return (
        <div>
            <div>Current Time:</div>
            <h3>{getTime()}</h3>
        </div>
    );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root')); */