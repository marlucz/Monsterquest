const URL = 'http://localhost:8080/api/v1';

const API = {
  fetchMonsters: async () => {
    const res = await fetch(`${URL}/monsters`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  },

  fetchMonster: async slug => {
    const res = await fetch(`${URL}/monster/${slug}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }
};

export default API;
