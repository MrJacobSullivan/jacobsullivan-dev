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
      data: { title, id }
    } = matter(source);

    const [slug] = file.split('.');

    return { slug, title, id };
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
  const filepath = path.join(getFolderPath(folder), slug + '.md');
  const file = fs.readFileSync(filepath);

  const {
    content,
    data: {
      id,
      title,
      date,
      imageSrc,
      imageAlt,
      description,
      technologies,
      tags
    }
  } = matter(file);

  const article = {
    data: {
      id,
      slug,
      title
    },
    content: {
      image: { src: imageSrc, alt: imageAlt },
      date,
      description,
      technologies,
      tags,
      body: content
    }
  } as Article;

  return article;
};
