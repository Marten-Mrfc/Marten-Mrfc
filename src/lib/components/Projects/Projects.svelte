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

<section id="projects" class="py-24 bg-gray-900">
    <div class="container mx-auto px-4">
        <h2 class="text-5xl font-bold mb-12 text-center text-white">
            Bekijk projecten
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects.slice(0, 3) as project}
                <div class="flex flex-col bg-gray-800 rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div class="relative overflow-hidden">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            class="w-full h-56 object-cover transform"
                        />
                    </div>
                    <div class="flex flex-col flex-grow p-8">
                        <h3 class="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                        <p class="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                        <div class="mt-auto">
                            <Button 
                                text="View Project →"
                                variant="primary"
                                size="md"
                                onClick={() => handleProjectClick(project.slug)}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>