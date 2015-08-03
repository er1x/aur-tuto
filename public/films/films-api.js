import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class FilmsApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  all() {
    return this.httpClient.get('http://swapi.co/api/films/?format=json')
                          .then(res => res.content.results);
  }
}
