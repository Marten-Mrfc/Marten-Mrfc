<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    
    let title = 'Marten Mrfc';
    let navItems = [
        { name: 'Home', href: `${base}/` },
        { name: 'Over Mij', href: `${base}/#about-me` },
        { name: 'Projecten', href: `${base}/projects` },
        { name: 'Contact', href: `${base}/contact` }
    ];

    let projects = [{}];
    let activePath = '';
    let showMenu = false;

    onMount(async () => {
        await loadProjects();
        activePath = window.location.pathname;
    });

    async function loadProjects() {
        const response = await fetch(`${base}/projects.json`);
        const projectsData = await response.json();
        projects = projectsData.map(project => ({
            name: project.title,
            href: `${base}/projects/${project.slug}`
        }));
    }

    function isActive(href: string) {
        return href === activePath ? 'text-yellow-500' : 'text-white';
    }

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<nav class={`bg-gray-900 p-4 shadow-lg flex items-center relative justify-between lg:justify-start`}>
    <div class="text-white text-xl font-bold">
        {title}
    </div>
    <button class="text-white lg:hidden" on:click={toggleMenu}>
        <!-- Minimal burger icon -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    <ul class={`${showMenu ? 'absolute top-full left-0 z-20 w-full flex flex-col space-y-4 bg-gray-900 px-4 py-2 border border-gray-700' : ' ml-4 mt-1 hidden'} lg:static lg:flex flex-row space-x-6`}>
        {#each navItems as { name, href }}
            <li class="relative group">
                <a href={href} class={`hover:text-gray-400 ${isActive(href)} font-medium`}>
                    {name}
                </a>
                {#if name === 'Projecten'}
                <div class="absolute hidden bg-gray-900 z-10 shadow-lg rounded-md group-hover:flex flex-col">
                    {#each projects as project}
                        <a href={project.href} class="block text-white px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                            {project.name}
                        </a>
                    {/each}
                </div>
                {/if}
            </li>
        {/each}
    </ul>
</nav>

<style>
    a {
        transition: color 0.3s ease;
    }
    .group:hover .group-hover\:block {
        display: block;
    }
    .group:hover .group-hover\:flex {
        display: flex;
    }
</style>