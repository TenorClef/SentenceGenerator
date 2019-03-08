import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeading()).toEqual('Your generated sentence is:');
  });
});
