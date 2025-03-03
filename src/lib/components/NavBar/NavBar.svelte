<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let title = 'Marten Mrfc';
	let navItems = [
		{ name: 'Home', href: `${base}/` },
		{ name: 'About Me', href: `${base}/#about-me` },
		{ name: 'Projects', href: `${base}/projects` },
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
		projects = projectsData.map((project) => ({
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

<nav
	class={`relative flex items-center justify-between bg-gray-900 p-4 shadow-lg lg:justify-start`}
>
	<div class="text-xl font-bold text-white">
		{title}
	</div>
	<button class="text-white lg:hidden" on:click={toggleMenu}>
		<!-- Minimal burger icon -->
		<svg class="h-6 w-6" fill="none" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
	<ul
		class={`${showMenu ? 'absolute left-0 top-full z-20 flex w-full flex-col space-y-4 border border-gray-700 bg-gray-900 px-4 py-2' : ' ml-4 mt-1 hidden'} flex-row space-x-6 lg:static lg:flex`}
	>
		{#each navItems as { name, href }}
			<li class="group relative">
				<a {href} class={`hover:text-gray-400 ${isActive(href)} font-medium`}>
					{name}
				</a>
				{#if name === 'Projects'}
					<div
						class="absolute z-10 hidden flex-col rounded-md bg-gray-900 shadow-lg group-hover:flex"
					>
						{#each projects as project}
							<a
								href={project.href}
								class="block whitespace-nowrap px-4 py-2 text-white hover:bg-gray-700"
							>
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
