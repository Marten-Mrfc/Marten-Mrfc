import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return rss({
		title: 'Marten — blog',
		description: 'Write-ups on Minecraft plugin development, Kotlin, and building for the web.',
		site: context.site,
		items: posts
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${post.id}/`
			}))
	});
}
