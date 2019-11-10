import React from 'react'



class SeasonDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            long: null,
            errorMessage: ''
        };
        
        window.navigator.geolocation.getCurrentPosition( // fetch position
            position => { // callback function that enventually run the state registration of position
                console.log(position)
                this.setState({lat: position.coords.latitude})
                this.setState({long: position.coords.longitude})
            },
            err => {
                console.log(err)
                this.setState({errorMessage: err.message})
            }
        );
    }

    componentDidMount() {
        console.log("My component was rendered to the screen")
    }

    componentDidUpdate() {
        console.log("My component was just updated - it rerendered !")
    }

    // React says 'we have to define render' ! 
    render() {
            if(this.state.errorMessage && !this.state.lat){
                return  <div>
                            <h1>{this.props.season}</h1>
                            Error: {this.state.errorMessage}
                        </div>
            } 
            if(!this.state.errorMessage && this.state.lat) {
                return <div>
                            <h1>{this.props.season}</h1>
                            Latitude: {this.state.lat}
                        </div>
            }

            return <div>Loading...</div>
            
        
    }
}



export default SeasonDisplay;


/*
Rules of Class Components : 
- Mussyst be a Javascript Class
- Must extend (subclass) React.Component
- Must define a 'render' method that returns some amount of JSX
*/

/*
Rules of State : 
- Only usable with class components
- You will confuse props with state ... 
- 'State' is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created
- State can ONLY be updated using the function 'setState'
*/

/*

Component Lifecycle : 
- constructor
- render (then content is visible on screen)
- componentDidMount (sit and wait for updates)
- componentDidUpdate (sit and wait until this component is not longer shown)
- componentWillUnmount
*/