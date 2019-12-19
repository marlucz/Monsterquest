import proxy from '../config';

class Api {
  async getMonsters() {
    try {
      const monsters = await fetch(`${proxy}/monsters`).then(res => res.json());
      return monsters.data;
    } catch (err) {
      return new Error(err);
    }
  }

  async getMonster(slug) {
    try {
      const monster = await fetch(`${proxy}/monster/${slug}`).then(res =>
        res.json()
      );
      return monster;
    } catch (err) {
      return new Error(err);
    }
  }
}

const API = new Api();
export default API;
