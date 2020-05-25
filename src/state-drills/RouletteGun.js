import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chamber: null,
            spinningTheChamber: false,
            message: ''
        }
        
    }
    
    handleTrigger = () => {
        if(!this.state.spinningTheChamber) {
            let timeout = setTimeout(this.chambered, 2000);
            this.setState({
                spinningTheChamber: true,
                message: 'spinning the chamber and pulling the trigger! ...'
            });
        };
    }

    chambered = () => {
        let chamber = Math.ceil(Math.random() * 8);
        this.setState ({
            spinningTheChamber: false,
            chamber
        }, this.pullTrigger)
    }

    pullTrigger = () => {
        const bullet = parseInt(this.props.bulletinchamber);
        console.log(bullet);
        if (this.state.chamber === bullet) {
            this.setState({
                message: 'BANG!!!!'
            });
        } else {
            this.setState({
                message: "you're safe!"
            });
        };
    }

    render() {
        return (
            <div className="roulette-gun">
                <p className="gun">{this.state.message}</p>
                <button className="trigger" onClick={ () => this.handleTrigger()}>Pull the trigger!</button>
            </div>
        );
    };
}

export default RouletteGun;