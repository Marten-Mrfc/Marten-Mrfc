<script lang="ts">
    import { onMount } from 'svelte';
    import type { Project } from '$lib/types';

    export let project: Project;
    let mounted = false;

    onMount(() => {
        mounted = true;
        if (project) {
            console.log('Main component mounted, project:', project);
        }
    });

    $: if (mounted && project) {
        console.log('Project data updated:', project);
    }

    $: safeProject = project ? {
        title: project.title || 'Untitled Project',
        description: project.description || '',
        content: project.content || '',
        link: project.link || null
    } : {
        title: 'Loading...',
        description: '',
        content: '',
        link: null
    };
</script>

<main class="flex-1 bg-gray-800 rounded-xl shadow-lg p-4 lg:p-8">
    {#if project}
        <div class="px-2">
            <div class="prose-invert max-w-none">
                <p class="text-4xl font-bold text-gray-100 leading-relaxed">
                    {safeProject.title}
                </p>
                {#if safeProject.description}
                    <p class="text-gray-400 text-sm">
                        {safeProject.description}
                    </p>
                {/if}
                <div class="mt-8"></div>
                {#if safeProject.content}
                    <div class="text-gray-200 text-lg overflow-y-auto max-h-[calc(100vh-18rem)] overflow-hidden">
                        {@html safeProject.content}
                    </div>
                {/if}
            </div>
        </div>
    {:else}
        <div class="text-white">Loading project details...</div>
    {/if}
</main>

