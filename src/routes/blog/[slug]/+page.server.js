import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load = async ({ params }) => {
	const { slug } = params;

	const postPath = path.join(process.cwd(), `src/lib/posts/${slug}.md`);

	if (!fs.existsSync(postPath)) {
		return {
			status: 404
		};
	}

	const fileContent = fs.readFileSync(postPath, 'utf-8');
	const { data, content } = matter(fileContent);

	return {
		meta: data,
		content
	};
};
