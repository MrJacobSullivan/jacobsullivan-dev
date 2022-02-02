import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { Article } from '../interfaces/index';

export enum Folder {
  blog = 'blog',
  work = 'work',
  test = 'test'
}

// points to ~/content
export const contentFolderPath = path.join(process.cwd(), 'content');

// point to ~/content/[folder]
export const getFolderPath = (folder: Folder) => {
  return path.join(contentFolderPath, folder);
};

// array of files in folder from getFolderPath
export const getFilePaths = (folder: Folder) => {
  const folderPath = getFolderPath(folder);
  return fs.readdirSync(folderPath).filter((file) => /\.md?$/.test(file));
};

export const getArticles = (folder: Folder) => {
  const files = getFilePaths(folder);

  const articles = files.map((file) => {
    const source = fs.readFileSync(path.join(getFolderPath(folder), file));
    const { content, data } = matter(source);

    return {
      content,
      data,
      slug: file.split('.')[0]
    };
  });

  return articles;
};

export const getArticle = (folder: Folder, slug: string) => {
  const file = fs.readFileSync(path.join(getFolderPath(folder), slug + '.md'));

  const {
    content,
    data: { title, description, date, tags }
  } = matter(file);

  const article: Article = {
    metadata: {
      slug,
      title,
      description,
      date,
      tags
    },
    content
  };

  return article;
};
