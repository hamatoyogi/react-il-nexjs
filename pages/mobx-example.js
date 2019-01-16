import React from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

class MobxExample extends React.Component {
  constructor() {
    super();
    this.randomPhrases = [
      'empower seamless eyeballs',
      'transition plug-and-play metrics',
      'expedite next-generation initiatives',
      'grow turn-key vortals',
      'orchestrate front-end architectures',
      'architect granular partnerships',
      'reintermediate compelling e-tailers',
      'deliver bleeding-edge schemas',
      'utilize cutting-edge infomediaries'
    ];
    // define the data we want to "watch"
    this.chosenPhrase = this.randomPhrases[0];
    this.counter = 0;
    this.changeState = this.changeState.bind(this);
  }

  // define an "action" -> we are saying what that we want to change a peice of "watched" data

  changeState() {
    // changing our data will trigger the re-render by mobx

    // just chosing a random phrase
    this.chosenPhrase = this.randomPhrases[
      Math.ceil(Math.random() * this.randomPhrases.length - 1)
    ];

    // increase the counter
    this.counter++;
  }

  render() {
    return (
      <main className={this.props.className}>
        <h1>Lean MobX React bullshit generator</h1>
        <button onClick={this.changeState}>Generate Some BS</button>
        <h2>Go Tweet this:</h2>
        <div>"{this.chosenPhrase}"</div>
        <h3>Demonstration of Some Mobx state shit</h3>
        <p> {`Button Clicked ${this.counter} Times`}</p>
      </main>
    );
  }
}

decorate(MobxExample, {
  chosenPhrase: observable,
  counter: observable,
  changeState: action
});

export default observer(MobxExample);
