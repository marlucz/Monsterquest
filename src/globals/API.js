const URL = 'http://localhost:8080/api/v1';

const API = {
  fetchMonsters: () => {
    return fetch(`${URL}/monsters`).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  },

  fetchMonster: slug => {
    return fetch(`${URL}/monster/${slug}`).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  }
};

export default API;
