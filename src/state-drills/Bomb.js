import React from 'react';

class Bomb extends React.Component {
    //Set an initial state
    state = {
        count: 0,
        message: ''
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            let newcount = this.state.count + 1;
            let message = '';
            if (newcount < 8) {
                if (newcount % 2 === 0) {
                    message = 'tick';
                } else {
                    message = 'tock';
                }
            } else {
                message = 'BOOM!!!';
                clearInterval(this.interval);
            }
            
            this.setState({
                count: newcount,
                message: message
            })
        }, 1000);    
    }


    render() {
        return(
            <div className='Bomb'>
                <p className='BombText'>{this.state.message}</p>
            </div>
        )
    }
}

export default Bomb;