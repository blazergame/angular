import { IdeelAngularPage } from './app.po';

describe('ideel-angular App', () => {
  let page: IdeelAngularPage;

  beforeEach(() => {
    page = new IdeelAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
