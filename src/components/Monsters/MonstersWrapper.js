import React from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';

class MonstersWrapper extends React.Component {
  state = {
    monsterList: [],
    selectedMonsterSlug: ''
  };

  render() {
    return (
      <section className="monsters">
        <MonsterList />
        <MonsterCard />
      </section>
    );
  }
}

export default MonstersWrapper;
