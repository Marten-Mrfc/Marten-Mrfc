<script lang="ts">
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import Button from '$lib/components/button/Button.svelte';
    
    let formData = {
        name: '',
        email: '',
        message: ''
    };

    async function handleSubmit() {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Bericht succesvol verzonden!');
                formData = { name: '', email: '', message: '' };
            } else {
                alert('Er is iets misgegaan. Probeer het opnieuw.');
            }
        } catch (error) {
            console.error('Fout bij het verzenden van het formulier:', error);
            alert('Er is een fout opgetreden. Probeer het later opnieuw.');
        }
    }
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    
    <main class="max-w-3xl mx-auto px-4 py-12">
        <div class="bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 class="text-4xl font-bold text-white mb-8">Contacteer Mij</h1>
            
            <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-400 mb-2">
                        Naam
                    </label>
                    <input
                        type="text"
                        id="name"
                        bind:value={formData.name}
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                    />
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-400 mb-2">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        bind:value={formData.email}
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                    />
                </div>
                
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-400 mb-2">
                        Bericht
                    </label>
                    <textarea
                        id="message"
                        bind:value={formData.message}
                        rows="6"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        required
                        placeholder="Dit systeem werkt helaas niet..."
                    ></textarea>
                </div>
                
                <Button
                    type="submit"
                    text="Verstuur Bericht"
                    variant="primary"
                    size="md"
                />
            </form>

            <div class="mt-12 border-t border-gray-700 pt-8">
                <h2 class="text-2xl font-bold text-white mb-4">Andere manieren om mij te bereiken</h2>
                <div class="space-y-4 text-gray-400">
                    <p>
                        <span class="font-medium">E-mail:</span>
                        <a href="mailto:martensog@gmail.com" class="text-blue-400 hover:text-blue-300 ml-2">
                            martensog@gmail.com
                        </a>
                    </p>
                    <p>
                        <span class="font-medium">Discord:</span>
                        <span class="text-blue-400 hover:text-blue-300 ml-2">
                            @marten_mrfcyt
                        </span>
                    </p>
                    <p class="text-sm">Ik reageer meestal binnen 24-48 uur.</p>
                </div>
            </div>
        </div>
    </main>
</div>