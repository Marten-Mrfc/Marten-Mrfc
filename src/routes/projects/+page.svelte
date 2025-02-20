<script lang="ts">
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let projects: { imageUrl: string; title: string; description: string; slug: string }[] = [];
    let loading = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            const response = await fetch(`${base}/projects.json`);
            if (!response.ok) throw new Error('Failed to fetch projects');
            projects = await response.json();
        } catch (e) {
            error = e instanceof Error ? e.message : 'An error occurred';
        } finally {
            loading = false;
        }
    });

    function handleProjectClick(slug: string) {
        window.location.href = `${base}/projects/${slug}`;
    }
</script>

<svelte:head>
    <title>Projects | Portfolio</title>
    <meta name="description" content="Explore my portfolio of projects and works" />
</svelte:head>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    
    <section class="pt-4">
        <div class="container mx-auto px-6">
            {#if loading}
                <div class="flex justify-center items-center py-20" transition:fade>
                    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            {:else if error}
                <div class="text-red-500 text-center py-12 bg-red-900/20 rounded-lg" transition:fade>
                    <p class="text-lg">{error}</p>
                    <Button 
                        text="Try Again"
                        variant="secondary"
                        size="sm"
                        onClick={() => window.location.reload()}
                        class="mt-4"
                    />
                </div>
            {:else}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" transition:fade>
                    {#each projects as project}
                        <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div class="relative overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div class="flex flex-col flex-grow p-6">
                                <h3 class="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p class="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
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
            {/if}
        </div>
    </section>
</div>