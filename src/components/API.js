import { URL } from '../data/config';

const API = {
  fetchMonsters: async () => {
    try {
      const monsters = await fetch(`${URL}/monsters`).then(res => res.json());
      return monsters.data;
    } catch (err) {
      return new Error(err);
    }
  },

  fetchMonster: async slug => {
    try {
      const monster = await fetch(`${URL}/monster/${slug}`).then(res =>
        res.json()
      );
      return monster;
    } catch (err) {
      return new Error(err);
    }
  }
};

export default API;
