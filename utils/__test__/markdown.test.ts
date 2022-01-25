import {
  Folder,
  getContentPath,
  getFolderPath,
  getFilePaths,
  getArticles,
  getArticle
} from '../markdown';

const constants = {
  CONTENT_FOLDER_PATH: '/Users/jacobsullivan/Desktop/jacobsullivan-dev/content',
  TEST_FOLDER_PATH:
    '/Users/jacobsullivan/Desktop/jacobsullivan-dev/content/test',
  TEST_FOLDER_FILES: ['test.md'],
  TEST_ARTCICLES: [
    {
      content: '\n# Hello, world\n',
      data: {
        description: 'this is a test',
        title: 'Test'
      },
      slug: 'test'
    }
  ],
  TEST_ARTICLE_SLUG: 'test',
  TEST_ARTICLE_CONTENT: {
    content: '\n# Hello, world\n',
    metadata: { description: 'this is a test', slug: 'test', title: 'Test' }
  }
};

describe('getContentPath', () => {
  test('it should return the correct content path', () => {
    expect(getContentPath()).toEqual(constants.CONTENT_FOLDER_PATH);
  });
});

describe('getFolderPath', () => {
  test('it should return the correct file path', () => {
    expect(getFolderPath(Folder.test)).toEqual(constants.TEST_FOLDER_PATH);
  });
});

describe('getFilePaths', () => {
  test('it should return the correct files in a folder', () => {
    expect(getFilePaths(Folder.test)).toEqual(constants.TEST_FOLDER_FILES);
  });
});

describe('getArticles', () => {
  test('it should return the correct data for each article', () => {
    expect(getArticles(Folder.test)).toEqual(constants.TEST_ARTCICLES);
  });
});

describe('getArticle', () => {
  test('it should return the correct data for an article', () => {
    expect(getArticle(Folder.test, constants.TEST_ARTICLE_SLUG)).toEqual(
      constants.TEST_ARTICLE_CONTENT
    );
  });
});
