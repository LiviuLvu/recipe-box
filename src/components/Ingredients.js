// display ingredients data belonging to selected recipe
// read/update ingredients on parent component & local storage

import React from 'react';

export default class Ingredients extends React.Component {
  render () {  
    const ingredients = this.props.ingredients.map((ingredient) =>
      <li key={ingredient}>{ingredient}</li>
    );
    return <div>
      <hr/>
      <p>Ingredients:</p>
      <button onClick={this.props.updateData}>Update</button>

      <ul>{ingredients}</ul>
    </div>
  }
}