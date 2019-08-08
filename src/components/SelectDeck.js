import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AddDeckForm from './AddDeckForm';

class SelectDeck extends PureComponent {
  state = {
    decks: []
  };

  componentDidMount() {
    console.log('SelectDeck cdm');
    // implement auth
    let { userId } = this.props.nav.match.params;
    fetch(`https://alex-anki-clone.herokuapp.com/api/users/${userId}/decks`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(prev => {
          return { decks: data.decks };
        });
      });
  }

  addDeck = deckName => {
    let { userId } = this.props.nav.match.params;
    fetch(`https://alex-anki-clone.herokuapp.com/api/users/${userId}/decks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: deckName })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(prev => {
          return { decks: [...prev.decks, data.deck] };
        });
      });
  };

  render() {
    console.log('SelectDeck');
    let { userId } = this.props.nav.match.params;
    let decksLis = this.state.decks.map(({ name, id }) => {
      return (
        <li key={id}>
          Name: {name}
          <div className="select-deck--container---deck-links">
            <Link to={`/users/${userId}/decks/${id}/useDeck`}>Use Deck</Link>{' '}
            <Link to={`/users/${userId}/decks/${id}/manageDeck`}>
              Add/Remove Cards
            </Link>
          </div>
          <hr />
        </li>
      );
    });
    return (
      <div className="select-deck">
        <div>
          <h1>Decks</h1>
          <ol>{decksLis}</ol>
        </div>
        <div>
          <h2>Add New Deck</h2>
          <AddDeckForm addDeck={this.addDeck} />
          <Link to={`/users`}>Back to all users</Link>
        </div>
      </div>
    );
  }
}

export default SelectDeck;
