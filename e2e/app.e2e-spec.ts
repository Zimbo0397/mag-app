import { MagAppPage } from './app.po';

describe('mag-app App', function() {
  let page: MagAppPage;

  beforeEach(() => {
    page = new MagAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
