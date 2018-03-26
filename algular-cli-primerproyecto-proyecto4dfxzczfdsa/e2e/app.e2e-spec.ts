import { AlgularCliPrimerproyectoProyecto4dfxzczfdsaPage } from './app.po';

describe('algular-cli-primerproyecto-proyecto4dfxzczfdsa App', function() {
  let page: AlgularCliPrimerproyectoProyecto4dfxzczfdsaPage;

  beforeEach(() => {
    page = new AlgularCliPrimerproyectoProyecto4dfxzczfdsaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
