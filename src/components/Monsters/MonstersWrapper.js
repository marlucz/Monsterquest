import React from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';
import API from '../API';

class MonstersWrapper extends React.Component {
  state = {
    monsterList: [],
    selectedMonsterSlug: ''
  };

  componentDidMount = () => {
    API.fetchMonsters().then(res => {
      this.setState({ monsterList: [...res] });
    });
  };

  render() {
    const { monsterList } = this.state;
    return (
      <section className="monsters">
        <MonsterCard />
        <MonsterList monsters={monsterList} />
      </section>
    );
  }
}

export default MonstersWrapper;
