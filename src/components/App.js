import elements from './elements';

export default class App {
  constructor() {
    this.setBtnListener();
  }

  setBtnListener() {
    elements.fetchBtn.addEventListener('click', this.fadeHeroSection);
  }

  fadeHeroSection() {
    elements.heroImages.forEach(image => {
      image.classList.add('faded--monsters');
    });
    elements.heroHeader.classList.add('faded--hero');
  }
}
