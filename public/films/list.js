import {inject} from 'aurelia-framework';
import {FilmsApi} from './films-api';

@inject(FilmsApi)
export class FilmList {
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
