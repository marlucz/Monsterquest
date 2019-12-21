import React from 'react';
import HeroWrapper from '../Hero/HeroWrapper';
import MonstersWrapper from '../Monsters/MonstersWrapper';
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
    const { isHeroVisible } = this.state;

    return (
      <div className={isHeroVisible ? 'app' : 'app app--center-content'}>
        {isHeroVisible ? (
          <HeroWrapper images={images} clickBtn={this.handleClickBtn} />
        ) : (
          <MonstersWrapper />
        )}
      </div>
    );
  }
}

export default App;
