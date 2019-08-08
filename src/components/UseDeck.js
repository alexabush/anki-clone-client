import React, { PureComponent } from 'react';
import Card from './Card';
import Deck from './Deck';

class UseDeck extends PureComponent {
  render() {
    return (
      <div className="">
        <Card
          cardData={this.props.currentCard}
          updateCardRating={this.props.updateCardRating}
        />
      </div>
    );
  }
}

export default UseDeck;
