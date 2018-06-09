import React, { Component } from 'react';
import Score from './Score';

class Title extends Component {

    styles = {
        font: {
            fontFamily: 'Alfa Slab One'
        }
    }

    render() {
        return(
            <div>
                <center><h2 style={this.styles.font}>Game Of Thrones Memory</h2></center>
            </div>
        );
    };
};

export default Title;