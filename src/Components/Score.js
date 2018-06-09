import React, { Component } from 'react';

class Score extends Component {

    styles = {
        font: {
            fontFamily: 'Alfa Slab One'
        }
    }

    state = {
        score: 0
    };

    render() {
        return(
            <div>
                <center><h3 style={this.styles.font}>Score:{this.state.score}</h3></center>
            </div>
        );
    };
};

export default Score;