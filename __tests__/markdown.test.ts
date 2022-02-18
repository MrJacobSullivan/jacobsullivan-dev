import {
  Folder,
  contentFolderPath,
  getFolderPath,
  getFiles,
  getAllArticleMetadata,
  getArticleBySlug
} from '../utils/markdown';

const CONTENT_FOLDER_PATH =
  '/Users/jacobsullivan/Desktop/jacobsullivan-dev/content';
const TEST_FOLDER_PATH =
  '/Users/jacobsullivan/Desktop/jacobsullivan-dev/content/test';
const TEST_FOLDER_FILES = ['test.md'];
const TEST_ARTICLE_SLUG = 'test';
const TEST_ARTICLE_DATA = { slug: TEST_ARTICLE_SLUG, title: 'Test' };
const TEST_ARTICLE_CONTENT = {
  data: TEST_ARTICLE_DATA,
  content: {
    description: 'this is a test',
    date: '01/25/2022',
    tags: ['test', 'javascript'],
    body: '\n# Hello, world\n'
  }
};

describe('getArticleBySlug', () => {
  test('test', () => {
    const article = getArticleBySlug(Folder.work, 'ultimate-tic-tac-toe');
    console.log(article);

    expect(1).toBe(1);
  });
});

// describe('getContentPath', () => {
//   test('should return the correct content path', () => {
//     expect(contentFolderPath).toEqual(CONTENT_FOLDER_PATH);
//   });
// });

// describe('getFolderPath', () => {
//   test('should return the correct file path', () => {
//     expect(getFolderPath(Folder.test)).toEqual(TEST_FOLDER_PATH);
//   });
// });

// describe('getFiles', () => {
//   test('should return the correct files in a folder', () => {
//     expect(getFiles(Folder.test)).toEqual(TEST_FOLDER_FILES);
//   });
// });

// describe('getAllArticleMetadata', () => {
//   test('should return the correct data for each article', () => {
//     const articles = getAllArticleMetadata(Folder.test);
//     expect(articles).toMatchObject([TEST_ARTICLE_DATA]);
//   });
// });

// describe('getArticleBySlug', () => {
//   test('should return the correct data for an article', () => {
//     const { data, content } = getArticleBySlug(Folder.test, TEST_ARTICLE_SLUG);
//     expect(data).toMatchObject(TEST_ARTICLE_CONTENT.data);
//     expect(content).toMatchObject(TEST_ARTICLE_CONTENT.content);
//   });
// });
