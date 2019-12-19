import elements from './elements';
import API from './Api';
import MonsterList from './MonsterList';

export default class App {
  constructor() {
    this.setBtnListener();
    this.state = {};
  }

  setBtnListener() {
    elements.fetchBtn.addEventListener('click', async () => {
      await this.getMonsters();
      this.fadeHeroSection();
    });
  }

  async getMonsters() {
    try {
      const fetchedMonsters = await API.getMonsters();
      this.state.monstersList = new MonsterList(fetchedMonsters);
      console.log(this.state.monstersList);
    } catch (err) {
      console.log(err);
    }
  }

  fadeHeroSection = () => {
    elements.heroImages.forEach(image => {
      image.classList.add('faded--monsters');
    });
    elements.heroHeader.classList.add('faded--hero');
    elements.heroHeader.addEventListener('animationend', e => console.log(e));
  };
}
