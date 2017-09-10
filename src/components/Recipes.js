// read data from local storage
// update local storage

import React from 'react';

import Ingredients from './Ingredients'

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Dragon soup', 'Fish fries'],
      ingredients: ['granola', 'spice'],
      updateData: this.updateData.bind(this)
    }
  }

  updateData = () => {
    this.setState({
      ingredients: ['cheese', 'vinegar']
    });
  }

  render() {
    return <div>
      <ul>
        <li>{this.state.recipes[0]}</li>
        <li>{this.state.recipes[1]}</li>
      </ul>
      <Ingredients 
        updateData={this.state.updateData}
        ingredients={this.state.ingredients}
      />
    </div>
  }
}