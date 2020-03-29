import React from 'react';
import '../assets/css/App.css';


import NavigationTabs from './NavigationTabs'

import Settings from './Settings';
import MessagesDisplayCanvas from './MessagesDisplayCanvas';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export function App(props) {
  return (
    <div className="App">
      <div className="headerCanvas">
        <NavigationTabs />
      </div>
      <div className="contentCanvas">
        {
          props.page.viewing === 0 ?
          <MessagesDisplayCanvas />
          :
          <Settings />
        }
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  null
)(App);
