import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ArticleData, Article } from '../types/markdown';

export enum Folder {
  work = 'work',
  test = 'test'
}

const contentFolder = 'content';

// points to ~/content
export const contentFolderPath = path.join(process.cwd(), contentFolder);

// point to ~/content/[folder]
export const getFolderPath = (folder: Folder) => {
  return path.join(contentFolderPath, folder);
};

// array of files in folder from getFolderPath
export const getFiles = (folder: Folder) => {
  const folderPath = getFolderPath(folder);
  return fs.readdirSync(folderPath).filter((file) => /\.md?$/.test(file));
};

// all articles with { slug, title }
export const getAllArticleMetadata = (folder: Folder): ArticleData[] => {
  const files = getFiles(folder);

  return files.map((file) => {
    const filePath = path.join(getFolderPath(folder), file);
    const source = fs.readFileSync(filePath);
    const {
      data: { title }
    } = matter(source);

    return { slug: file.split('.')[0], title } as ArticleData;
  });
};

// single article by slug
export const getArticleBySlug = (folder: Folder, slug: string): Article => {
  const filepath = path.join(getFolderPath(folder), slug + '.md');
  const file = fs.readFileSync(filepath);

  const {
    content,
    data: { title, description, date, tags }
  } = matter(file);

  const article = {
    data: {
      slug,
      title
    },
    content: {
      description,
      date,
      tags,
      body: content
    }
  } as Article;

  return article;
};
