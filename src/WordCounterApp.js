// src/WordCounterApp.js
import React, { Component } from 'react';

class WordCounterApp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  getWordCount = () => {
    const text = this.state.text;
    const words = text.split(/\s+/);
    return words.filter((word) => word.length > 0).length;
  };

  render() {
    return (
      <div className="word-counter-app">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          placeholder="Type here..."
          value={this.state.text}
          onChange={this.handleTextChange}
        ></textarea>
        <p>Word count: {this.getWordCount()}</p>
      </div>
    );
  }
}

export default WordCounterApp;
