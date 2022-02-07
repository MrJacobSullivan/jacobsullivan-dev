import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.resolve('.', 'public/resume.pdf');
const file = fs.readFileSync(filePath);

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/pdf');
  res.status(200).send(file);
}
