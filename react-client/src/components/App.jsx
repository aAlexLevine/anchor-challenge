import React from 'react';
import './App.css'
import Header from './Header.jsx';
import Button from './Button.jsx'
import { findLargestUniqueSetToRemove, text } from '../utils.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      index: 0,
      frontHalf: '',
      currLetter: '',
      backHalf: '',
      scanning: false,
      showResult: false,
      uniques: {},
      uniqueArr: [],
      toggleReset: false
    }
    this.animateText = this.animateText.bind(this)
    this.shouldRemove = this.shouldRemove.bind(this)
    this.createUniqueCharHash = this.createUniqueCharHash.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    const { index } = this.state
    this.setState({
      text: text,
      frontHalf: text.slice(0, index),
      currLetter: text[index],
      backHalf: text.slice(index + 1)
    })
    this.createUniqueCharHash()
  }

  createUniqueCharHash() {
    const uniqueArr = findLargestUniqueSetToRemove(text, 50)
    const uniqueHash = uniqueArr.reduce((acc, curr) => {
      acc[curr] = curr
      return acc
    }, {})
    this.setState({
      uniques: uniqueHash,
      uniqueArr: uniqueArr
    })
  }

  animateText() {
    const { text, index, frontHalf, backHalf, currLetter} = this.state
    if (index < text.length) {
      this.setState({
        scanning: true,
        frontHalf: text.slice(0, index),
        currLetter: text[index],
        backHalf: text.slice(index + 1),
        text: frontHalf + currLetter + backHalf
      }, this.shouldRemove)
    } else {
      this.setState({
        scanning: false,
        currLetter: '',
        index: 0,
        showResult: true,
        toggleReset: true
      })
    }
  }

  shouldRemove() {
    const { text, index, frontHalf, backHalf, uniques } = this.state
    const removeLetter = !!uniques[text[index]]
    if (removeLetter) {
      this.setState({
        currLetter: '',
        text: frontHalf + backHalf
      })
    } else {
      this.setState({
        index: index + 1
      })
    }
    setTimeout(() => {
      this.animateText()
    }, 100);
  }

  reset() {
    const { index } = this.state
    this.setState({
      showResult: false,
      toggleReset: false,
      text: text,
      frontHalf: text.slice(0, index),
      currLetter: text[index],
      backHalf: text.slice(index + 1)
    })
  }


  render() {
    let current = this.state.currLetter
    if (this.state.scanning) {
      current = this.state.currLetter
    }
    if (this.state.scanning && this.state.currLetter === ' ') {
      current = '_' 
    }
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Challenge accepted!</h1>
        
        <div className="prompt-container">
          <div className="prompt">
               <p>
                 "
                <span>{this.state.frontHalf}</span>
                <span className={this.state.scanning ? "color" : null}>{current}</span>
                <span >{this.state.backHalf}</span>
                "
              </p> 
          </div>
        </div>

        <div className="results-container">
          <div className="analyzeButton">
            {this.state.toggleReset  
              ? <Button onClick={this.reset} text={"Reset"}/>
              : <Button onClick={this.animateText} text={"Analyze"} />}
          </div>
            
          {this.state.scanning 
            ? <h2 className="computing">computing... beep boop bop...</h2> 
            : null}

          <div>
            {this.state.showResult 
            ? <h2 className="result">Result: [{this.state.uniqueArr.toString()}]</h2>
            : null}
          </div>
        </div>
      </div>
    )
  }
}

export default App;