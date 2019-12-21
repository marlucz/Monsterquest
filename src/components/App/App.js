import React from 'react';
import HeroWrapper from '../HeroWrapper/HeroWrapper';
import { images } from '../../data/heroImages';
import './App.scss';

class App extends React.Component {
  state = {
    isHeroVisible: true
  };

  handleClickBtn = () => {
    this.setState({ isHeroVisible: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.isHeroVisible && (
          <HeroWrapper images={images} clickBtn={this.handleClickBtn} />
        )}
      </div>
    );
  }
}

export default App;
