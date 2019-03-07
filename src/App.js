import React, { Component } from 'react'
import MathJax from '@matejmazur/react-mathjax'
import convert from './conversion/convert'
import './App.css'

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
        <div className='header'>
          <h1>Excel Formula Viewer</h1>
          <p>Type your formula below to see it in all it's glory!</p>
          <input onChange={this.handleInput} value={this.state.formula} />
        </div>
        <div className='formulaView'>
          <MathJax.Context>
            <MathJax.Node>{this.state.asciiFormula}</MathJax.Node>
          </MathJax.Context>
        </div>
        <div className='footer'>
          <p>Check it out on <a href='https://github.com/LiTO773/ExcelFormulaViewer'>Github</a> | Made by <a href='https://github.com/LiTO773'>LiTO773</a></p>
        </div>
      </div>
    )
  }
}

export default App;
