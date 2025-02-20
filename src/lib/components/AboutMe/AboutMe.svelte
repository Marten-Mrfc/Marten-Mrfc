<script>
    export let imageUrl = '';
    export let description = '';
    export let altText = ''; // Add altText prop for accessibility
</script>

<div class="about-me flex flex-col md:flex-row items-center py-8 px-4 bg-gray-900 text-white">
    <img src={imageUrl} alt={altText} class="w-full md:w-auto max-w-xs md:max-w-none md:mr-8 rounded-full shadow-lg" />
    <div class="description flex-1 text-lg mt-4 md:mt-0">
        <h2 class="text-3xl font-bold mb-4">Over mij</h2>
        <p class="text-gray-100">{description}</p>
        <ul class="mt-4 space-y-2">
            <li>🔭 Ik werk momenteel aan een cool project</li>
            <li>🌱 Ik ben bezig met het leren van Svelte</li>
            <li>👯 Ik zoek naar samenwerking bij open source projecten</li>
            <li>💬 Wil je chatten?</li>
            <li class="ml-8">
                📫 Via mijn email: 
                <a class="text-blue-500 underline hover:text-blue-700" href="mailto:martensog@gmail.com" aria-label="Stuur een email naar Marten">
                  martensog@gmail.com
                </a>
                <br>
                🟪 Via mijn discord:
                marten_mrfcyt
              </li>
        </ul>
    </div>
</div>