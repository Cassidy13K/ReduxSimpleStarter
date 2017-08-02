import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("mainStore")
@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.mainStore.randomNumber}</h1>
        </div>
        <div>
          <button onClick={() => this.props.mainStore.rollAnotherNumber()}>Roll!</button>
        </div>
      </div>
    );
  }
}
