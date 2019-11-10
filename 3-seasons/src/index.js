import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

const App = () => {
    return (
        <div>
            <SeasonDisplay season={"WINTER IS COMING"}/> 
        </div>
    )
};

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)
