import React from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';
import API from '../API';
import './MonstersWrapper.scss';

class MonstersWrapper extends React.Component {
  state = {
    monsterList: [],
    selectedMonster: {}
  };

  componentDidMount = () => {
    API.fetchMonsters().then(res => {
      this.setState({ monsterList: [...res] });
    });
  };

  getMonster = monsterSlug => {
    API.fetchMonster(monsterSlug).then(res => {
      this.setState({ selectedMonster: res.data });
    });
  };

  render() {
    const { monsterList, selectedMonster } = this.state;
    return (
      <section className="monsters-wrapper">
        <MonsterCard monster={selectedMonster} />
        <MonsterList
          monsters={monsterList}
          fetchMonster={this.getMonster}
          selected={selectedMonster}
        />
      </section>
    );
  }
}

export default MonstersWrapper;
