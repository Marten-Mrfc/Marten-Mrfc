<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;

	// Ensure default values if project is undefined
	$: safeProject = project || {
		title: '',
		imageUrl: null,
		description: '',
		tags: [],
		link: null,
		startDate: null,
		endDate: null
	};

	function formatDate(dateString) {
		if (!dateString) return '';
		try {
			return new Date(dateString).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
		} catch (error) {
			console.error('Error formatting date:', error);
			return '';
		}
	}

	function formatDateRange(startDate, endDate) {
		const start = startDate ? formatDate(startDate) : '';
		const end = endDate ? formatDate(endDate) : 'Present';
		return `${start} - ${end}`;
	}
</script>

<aside class="w-full flex-shrink-0 md:w-[300px]" aria-label="Project details">
	<div class="sticky top-4 h-[80vh] space-y-6 rounded-xl bg-gray-800 p-4 shadow-lg md:p-6">
		{#if safeProject.imageUrl}
			<div class="relative aspect-video overflow-hidden rounded-xl">
				<img
					src={safeProject.imageUrl}
					alt={safeProject.title}
					loading="lazy"
					class="h-full w-full transform object-cover transition-all duration-300 hover:scale-105"
				/>
			</div>
		{/if}
		{#if safeProject.date}
			<div class="space-y-1">
				<h3 class="text-sm font-medium text-gray-400">Published</h3>
				<p class="text-gray-100">{formatDate(safeProject.date)}</p>
			</div>
		{/if}

		<div class="space-y-3">
			<div class="space-y-1">
				<p class="text-sm text-gray-400">Started on:</p>
				<p class="text-gray-100">{formatDate(safeProject.startDate)}</p>
			</div>
			<div class="space-y-1">
				<p class="text-sm text-gray-400">Ended on:</p>
				<p class="text-gray-100">
					{safeProject.endDate ? formatDate(safeProject.endDate) : 'Present'}
				</p>
			</div>
		</div>

		{#if safeProject.tags?.length}
			<div>
				<h3 class="mb-2 text-sm font-medium text-gray-400">Tags</h3>
				<div class="flex flex-wrap gap-2">
					{#each safeProject.tags as tag}
						<span
							class="cursor-default rounded-full bg-blue-600/20 px-3 py-1 text-xs
                            font-medium text-blue-400 transition-colors hover:bg-blue-600/30"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</aside>
