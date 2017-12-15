import React, { Component } from 'react'
import './App.css'
import foodItems from './food.json'
import Food from './Food.js'

class App extends Component {
  render () {
    return (
        <Food allItems={foodItems}/>
    )
  }
}

export default App
