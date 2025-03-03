<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Button from '../button/Button.svelte';
	let projects: { imageUrl: string; title: string; description: string; slug: string }[] = [];

	onMount(async () => {
		const response = await fetch(`${base}/projects.json`);
		projects = await response.json();
	});

	function handleProjectClick(slug: string) {
		window.location.href = `${base}/projects/${slug}`;
	}
</script>

<section id="projects" class="bg-gray-900 py-24">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-5xl font-bold text-white">View Projects</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects.slice(0, 3) as project}
				<div
					class="group flex flex-col overflow-hidden rounded-xl bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl"
				>
					<div class="relative overflow-hidden">
						<img
							src={project.imageUrl}
							alt={project.title}
							class="h-56 w-full transform object-cover"
						/>
					</div>
					<div class="flex flex-grow flex-col p-8">
						<h3 class="mb-4 text-2xl font-bold text-white">{project.title}</h3>
						<p class="mb-6 line-clamp-3 text-gray-400">{project.description}</p>
						<div class="mt-auto">
                            <a href={`${base}/projects/${project.slug}`}>
                                <Button
                                    text="View Project →"
                                    variant="primary"
                                    size="md"
                                />
                            </a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
