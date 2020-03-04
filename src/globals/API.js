const URL = 'http://localhost:8080/api/v1';

const API = {
  fetchMonsters: async () => {
    const response = await fetch(`${URL}/monsters`);
    if (response.ok && response.status >= 200 && response.status <= 299) {
      const monsters = await response.json();
      return monsters.data;
    } else {
      return Error(response.statusText);
    }
  },

  fetchMonster: async slug => {
    const response = await fetch(`${URL}/monster/${slug}`);
    if (response.ok && response.status >= 200 && response.status <= 299) {
      const monster = await response.json();
      return monster.data;
    } else {
      return Error(response.statusText);
    }
  }
};

export default API;