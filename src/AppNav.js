import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import SelectDeck from './components/SelectDeck';
import ShowDeck from './components/ShowDeck';
import ManageUsers from './components/ManageUsers';
import Layout from './components/Layout';

console.log('IN APPNAV.js AKA root');
const RedirectComponent = () => {
  return <Redirect to="/users" />;
};
const SelectDeckOption = props => {
  return <SelectDeck nav={props} />;
};

const UseDeckOption = props => {
  return <ShowDeck nav={props} status="use" />;
};

const ManageDeckOption = props => {
  return <ShowDeck nav={props} status="manage" />;
};

class AppNav extends PureComponent {
  render() {
    return (
      <Layout>
        <Router>
          <>
            <Route exact path="/" component={() => <RedirectComponent />} />
            <Route exact path="/users" component={() => <ManageUsers />} />
            <Route
              exact
              path="/users/:userId/decks"
              component={SelectDeckOption}
            />
            <Route
              path="/users/:userId/decks/:deckId/useDeck"
              component={UseDeckOption}
            />
            <Route
              path="/users/:userId/decks/:deckId/manageDeck"
              component={ManageDeckOption}
            />
          </>
        </Router>
      </Layout>
    );
  }
}

export default AppNav;
