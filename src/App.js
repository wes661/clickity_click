import React, { Component } from 'react';
import Cards from './Components/Cards';
import Score from './Components/Score';
import Title from './Components/Title';
import playCards from "./playCards.json";
import './App.css';



class App extends Component {

    state = {
        playCards
    };

    shuffleCards = () => {
        const cards = this.state.playCards;
        for (let i = cards.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        this.setState({
            playCards: cards
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>            
                        <Title />
                    </div> 
                    <div className='col-6'>            
                        <Score />
                    </div> 
                 </div>    
                <div className='row'>
                    <div className="col-12">
                        {this.state.playCards.map(card => (
                            <Cards
                                id={card.id}
                                key={card.id}
                                cardImage={card.cardImage}
                                shuffle={this.shuffleCards}
                            />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
