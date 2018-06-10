import React, { Component } from 'react';
import Cards from './Components/Cards';
import Score from './Components/Score';
import Title from './Components/Title';
import playCards from "./playCards.json";
import './App.css';



class App extends Component {

    state = {
        playCards,
        score: 0,
        clicked: []
    };

    checkClicked = (e) => {
        const cardId = e.target.id
        if(this.state.clicked.includes(cardId)){
           this.setState({
               score: 0,
               clicked: []
           })
        }
        else{
            const clickedArray = this.state.clicked
            clickedArray.push(cardId)
            this.setState({ score: this.state.score + 1,
            clicked: clickedArray})
               
            
        }
        this.shuffleCards(); 
    }

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
                        <Score
                            score={this.state.score}
                        />
                    </div> 
                 </div>    
                <div className='row'>
                    <div className="col-12">
                        {this.state.playCards.map(card => (
                            <Cards
                                id={card.id}
                                key={card.id}
                                cardImage={card.cardImage}
                                clicked={card.clicked}
                                shuffle={this.shuffleCards}
                                checkClicked={this.checkClicked}
                            />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
