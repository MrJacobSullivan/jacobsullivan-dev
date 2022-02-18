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

  const articles = files.map((file) => {
    const filePath = path.join(getFolderPath(folder), file);
    const source = fs.readFileSync(filePath);
    const {
      data: { title, color }
    } = matter(source);

    const [filename] = file.split('.');
    const [id, ...slug] = filename.split('-');

    return { slug: slug.join('-'), title, id: parseInt(id), color };
  });
  articles.sort((a, b) => a.id - b.id);

  return articles;
};

export const getFirstNArticles = (
  folder: Folder,
  number: number
): ArticleData[] => {
  const articles = getAllArticleMetadata(folder);
  return articles.slice(0, number);
};

// single article by slug
export const getArticleBySlug = (folder: Folder, slug: string): Article => {
  const matchingFile = getFiles(folder).find((_file) => _file.includes(slug));
  const filepath = path.join(getFolderPath(folder), matchingFile as string);
  const file = fs.readFileSync(filepath);

  const {
    content,
    data: { id, title, date, description, technologies, github, website, color }
  } = matter(file);

  const article = {
    data: {
      id,
      slug,
      title,
      color
    },
    content: {
      date,
      description,
      technologies,
      github,
      website,
      body: content
    }
  } as Article;

  return article;
};
