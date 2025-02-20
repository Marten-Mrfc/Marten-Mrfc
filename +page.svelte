<script>
    let { data } = $props();
</script>

<article class="max-w-5xl mx-auto px-4 py-8 bg-white rounded-xl shadow-lg my-8">
    <header class="mb-8 border-b border-gray-200 pb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.project.title}</h1>
        {#if data.project.tags}
            <div class="flex flex-wrap gap-2 mb-4">
                {#each data.project.tags as tag}
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}
    </header>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside class="md:col-span-4 lg:col-span-3">
            {#if data.project.imageUrl}
                <div class="mb-6 overflow-hidden rounded-lg shadow-md sticky top-4">
                    <img 
                        src={data.project.imageUrl} 
                        alt={data.project.title}
                        class="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            {/if}

            <div class="bg-gray-50 rounded-lg p-6 sticky top-[220px]">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
                {#if data.project.date}
                    <div class="mb-4">
                        <h3 class="text-sm font-medium text-gray-500">Date</h3>
                        <p class="text-gray-900">{new Date(data.project.date).toLocaleDateString()}</p>
                    </div>
                {/if}
                
                {#if data.project.link}
                    <a 
                        href={data.project.link}
                        class="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live Project
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                {/if}
            </div>
        </aside>

        <main class="md:col-span-8 lg:col-span-9">
            <div class="prose prose-lg max-w-none">
                <p class="text-xl text-gray-700 leading-relaxed mb-6">
                    {data.project.description}
                </p>

                {#if data.project.content}
                    <div class="mt-8">
                        {@html data.project.content}
                    </div>
                {/if}
            </div>
        </main>
    </div>
</article>
