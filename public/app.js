import {inject} from 'aurelia-framework';
import {Films} from './films';

@inject(Films)
export class App {
  constructor(films) {
    this.films = films;
  }

  activate() {
    return this.films.all()
                     .then(res => {
                       this.movies = res.map((movie) => {
                         return {
                           title: movie.title
                         };
                       });
                     });
  }
}
