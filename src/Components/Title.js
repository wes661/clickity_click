import React, { Component } from 'react';


class Title extends Component {

    styles = {
        font: {
            fontFamily: 'Alfa Slab One',
            color: 'White',
            stroke: "black"
        }
    }

    render() {
        return(
            <div>
                <h2 className="animated fadeInLeft" style={this.styles.font}>G-o-T Memory</h2>
            </div>
        );
    };
};

export default Title;