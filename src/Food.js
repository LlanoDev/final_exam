import React, { Component } from 'react'
import './App.css'

class Food extends Component {
  state = {
    itemCount : []
  }
  handleClick = (e) => {
    let currArr = this.state.itemCount
    let toRemove = currArr.indexOf(e.target.name)
    let itemName
    e.target.checked === true ? (
      itemName = currArr.push(e.target.name),
      this.setState({itemCount: [...currArr, ...itemName]})
    ) : (
      itemName = currArr.splice(toRemove, 1),
      this.setState({itemCount: [...currArr]})
    )
  }
  render () {
    let everyThing = this.props.allItems
    return(
      <div className='outer'>
        <div>{this.state.itemCount.length}</div>
        {everyThing.map((item) => {
          return <div className='inner'><input type="checkbox" name={item.item_name} onClick={this.handleClick}/>{item.item_name}</div>
        })}
      </div>
    )
  }
}
export default Food
