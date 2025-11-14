import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load = async () => {
  const postsDir = path.join(process.cwd(), 'src/lib/posts');
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        ...data,
        slug: file.replace('.md', '')
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

  return { posts };
};
