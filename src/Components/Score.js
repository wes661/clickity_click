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
                <center>
                    <h5 className='animated fadeInRight' style={this.styles.font}>Score:{this.props.score}</h5>
                </center>
            </div>
        );
    };
};

export default Score;