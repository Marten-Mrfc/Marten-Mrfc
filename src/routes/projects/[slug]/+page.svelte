<script lang="ts">
    import Aside from '$lib/components/Projects/project/aside/Aside.svelte';
    import Main from '$lib/components/Projects/project/Main/Main.svelte';
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import type { Project } from '$lib/types';
    
    export let data;
    
    $: project = data.projects.find((p: Project) => p.slug === data.slug);
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    <div class="max-w-6xl mx-auto px-4 py-4 h-[calc(100vh-4rem)] overflow-y-auto">
        <article class="flex flex-col md:flex-row gap-8">
            {#if !project}
                <div class="text-red-500">Project not found</div>
            {:else}
                <Aside project={project} />
                <Main project={project} />
            {/if}
        </article>
    </div>
</div>