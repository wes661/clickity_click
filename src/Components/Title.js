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
                <h4 className="animated fadeInLeft" style={this.styles.font}>G-o-T Memory</h4>
            </div>
        );
    };
};

export default Title;