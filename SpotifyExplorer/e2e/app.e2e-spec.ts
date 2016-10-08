import { SpotifyExplorerPage } from './app.po';

describe('spotify-explorer App', function() {
  let page: SpotifyExplorerPage;

  beforeEach(() => {
    page = new SpotifyExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
