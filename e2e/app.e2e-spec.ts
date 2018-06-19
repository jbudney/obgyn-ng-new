import { AngularProj1Page } from './app.po';

describe('angular-proj1 App', () => {
  let page: AngularProj1Page;

  beforeEach(() => {
    page = new AngularProj1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
