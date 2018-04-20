import { ConversionesPage } from './app.po';

describe('conversiones App', function() {
  let page: ConversionesPage;

  beforeEach(() => {
    page = new ConversionesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
