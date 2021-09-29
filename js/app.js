import '../sass/style.scss';

class Doggos {
   constructor() {
      this.apiUrl = 'https://dog.ceo/api';
      this.imgEl = document.querySelector('.featured-dog__image img');
      this.init();
   }

   breedsList() {
      return fetch(`${this.apiUrl}/breeds/list/all`)
         .then(resp => resp.json())
         .then(data => data.message);
   }

   getRandomImage() {
      return fetch(`${this.apiUrl}/breeds/image/random`)
         .then(resp => resp.json())
         .then(data => data.message);
   }

   getRandomImageByBreed(breed) {
      return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
         .then(resp => resp.json())
         .then(data => data.message);
   }

   init() {
      this.getRandomImage()
         .then(src => this.imgEl.setAttribute('src', src));

      this.breedsList()
         .then(breeds => console.log(breeds));
   }
}

document.addEventListener('DOMContentLoaded', () => {
   new Doggos();
})