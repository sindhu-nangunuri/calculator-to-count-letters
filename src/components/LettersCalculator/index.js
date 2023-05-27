// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const totalLetters = searchInput.length

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className="para">Enter the phrase</p>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="text"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <p className="letter-count">No.of letters: {totalLetters}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
