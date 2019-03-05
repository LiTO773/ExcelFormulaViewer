import React, { Component } from 'react'
import MathJax from '@matejmazur/react-mathjax'
import convert from './conversion/convert'

class App extends Component {
  constructor () {
    super()
    this.state = { formula: '', asciiFormula: '' }
  }

  handleInput = e => {
    this.setState({ formula: e.target.value, asciiFormula: convert(e.target.value) })
  }

  render () {
    return (
      <div id='App'>
        <h1>Excel Formula Viewer</h1>
        <input onChange={this.handleInput} value={this.state.formula} />
        <br/>
        <MathJax.Context>
          <MathJax.Node>{this.state.asciiFormula}</MathJax.Node>
        </MathJax.Context>
      </div>
    )
  }
}

export default App;
