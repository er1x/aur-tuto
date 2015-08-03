
export class App {
  configureRouter(config, router) {
      this.router = router;
      config.map([
        {route: ['', 'films'], moduleId: 'films/list', title: 'Films', nav: true},
        {route: ['characters'], moduleId: 'characters/list', title: 'Characters', nav: true}
      ]);
  }
}
