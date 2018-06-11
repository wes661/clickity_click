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
                <center><h3 className="animated fadeInLeft" style={this.styles.font}>Game Of Thrones Memory</h3></center>
            </div>
        );
    };
};

export default Title;