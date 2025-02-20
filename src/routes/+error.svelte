<script lang="ts">
    import { page } from '$app/stores';
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
</script>

<div class="min-h-screen flex flex-col">
    <NavBar/>
    <div class="flex flex-col items-center justify-center flex-grow bg-gray-100 p-4">
        <div class="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p class="text-xl text-gray-600 mb-2">Oops! The page you're looking for isn't here.</p>
            <p class="text-lg text-gray-500 mb-6">You might have the wrong address, or the page may have moved.</p>
            <a href="/" class="px-6 py-3 bg-blue-500 text-lg text-white rounded hover:bg-blue-700 transition duration-300">Go Home</a>
        </div>
    </div>
</div>