import React, { Component } from 'react';

class Score extends Component {

    styles = {
        font: {
            fontFamily: 'Alfa Slab One'
        }
    }

    render() {
        return(
            <div>
                <center><h3 style={this.styles.font}>Score:{this.props.score}</h3></center>
            </div>
        );
    };
};

export default Score;