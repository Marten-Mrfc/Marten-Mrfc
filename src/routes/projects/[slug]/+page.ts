import { base } from '$app/paths';

export async function load({ fetch, params }) {
    const response = await fetch(`${base}/projects.json`);
    const projects = await response.json();
    return {
        projects,
        slug: params.slug
    };
}

export const prerender = true;

export function entries() {
    return [
        { slug: "project-website" },
        { slug: "eigen-project" },
        { slug: "vakantie-project" },
        { slug: "ai-image-classifier" },
        { slug: "fitness-tracking-app" },
        { slug: "defi-exchange" }
    ];
}
