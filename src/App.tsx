import React, { Component } from 'react';
import { Login } from './components/login';
import { Main } from './components/main';
import { proxy } from './proxy';

export default class App extends Component
{
  state = { showLogin: true };

  componentDidMount()
  {
    proxy.addEventListener( "login", () => { this.setState( { showLogin: false } ) } );
  }

  render()
  {
    return (
      <div className="app">
        { this.state.showLogin ? <Login /> : <Main /> }
      </div>
    );
  }

}