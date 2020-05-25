import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {
    //set our initial state
    state = {
        who: 'world'
    };

    handleClick = (message) => {
        this.setState({
            who: message
        })

    };

    render() {
        return(
            <div className='helloWorld'>
                <p className='helloText'>Hello, {this.state.who}</p>
                <button onClick={ () => this.handleClick('world')}>World</button>
                <button onClick={ () => this.handleClick('friend')}>Friend</button>
                <button onClick={ () => this.handleClick('React')}>React</button>
            </div>
        )
    }

}

export default HelloWorld;