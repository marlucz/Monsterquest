import React from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';
import MessageHandler from '../MessageHandler/MessageHandler';
import API from '../API';
import './MonstersWrapper.scss';

class MonstersWrapper extends React.Component {
  state = {
    monsterList: [],
    selectedMonster: {},
    hasError: false
  };

  componentDidMount = () => {
    API.fetchMonsters().then(res => {
      try {
        if (!(res instanceof Error)) {
          this.setState({ monsterList: [...res] });
        } else {
          throw Error(res.message);
        }
      } catch (err) {
        this.setState({ hasError: true });
      }
    });
  };

  getMonster = monsterSlug => {
    API.fetchMonster(monsterSlug).then(res => {
      try {
        if (!(res instanceof Error)) {
          this.setState({ selectedMonster: res });
        } else {
          throw Error(res.message);
        }
      } catch (err) {
        this.setState({ hasError: true });
      }
    });
  };

  render() {
    const { monsterList, selectedMonster, hasError } = this.state;
    return (
      <>
        {hasError ? (
          <MessageHandler>
            What you are looking for is either being downloaded from the server,
            trying to be displayed on the site ... or has been destroyed by our
            little monsters :(
          </MessageHandler>
        ) : (
          <section className="monsters-wrapper">
            <MonsterCard monster={selectedMonster} />
            <MonsterList
              monsters={monsterList}
              fetchMonster={this.getMonster}
              selected={selectedMonster}
            />
          </section>
        )}
      </>
    );
  }
}

export default MonstersWrapper;
