import React from 'react';
import { render } from 'react-dom';

import Recipes from './components/Recipes';

import './styles/reset.css';
import './styles/index.css';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Recipe Box</h2>
        <a href="https://github.com/LiviuLvu/recipe-box">Source Code Link</a>
        
        <hr/>
        <h4>Recipes:</h4>
        <Recipes/>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('root'));
