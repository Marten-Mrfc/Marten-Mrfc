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
				alert('Message sent successfully!');
				formData = { name: '', email: '', message: '' };
			} else {
				alert('Something went wrong. Please try again.');
			}
		} catch (error) {
			console.error('Error sending the form:', error);
			alert('An error occurred. Please try again later.');
		}
	}
</script>

<div class="min-h-screen bg-gray-900">
	<NavBar />

	<main class="mx-auto max-w-3xl px-4 py-12">
		<div class="rounded-xl bg-gray-800 p-8 shadow-lg">
			<h1 class="mb-8 text-4xl font-bold text-white">Contact Me</h1>

			<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
				<div>
					<label for="name" class="mb-2 block text-sm font-medium text-gray-400"> Name </label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white transition-colors focus:border-blue-500 focus:outline-none"
						required
					/>
				</div>

				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-gray-400"> Email </label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white transition-colors focus:border-blue-500 focus:outline-none"
						required
					/>
				</div>

				<div>
					<label for="message" class="mb-2 block text-sm font-medium text-gray-400">
						Message
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						rows="6"
						class="w-full resize-none rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white transition-colors focus:border-blue-500 focus:outline-none"
						required
						placeholder="This system unfortunately doesn't work yet..."
					></textarea>
				</div>

				<Button type="submit" text="Send Message" variant="primary" size="md" />
			</form>

			<div class="mt-12 border-t border-gray-700 pt-8">
				<h2 class="mb-4 text-2xl font-bold text-white">Other ways to reach me</h2>
				<div class="space-y-4 text-gray-400">
					<p>
						<span class="font-medium">Email:</span>
						<a href="mailto:martensog@gmail.com" class="ml-2 text-blue-400 hover:text-blue-300">
							martensog@gmail.com
						</a>
					</p>
					<p>
						<span class="font-medium">Discord:</span>
						<span class="ml-2 text-blue-400 hover:text-blue-300"> @marten_mrfcyt </span>
					</p>
					<p class="text-sm">I usually respond within 24-48 hours.</p>
				</div>
			</div>
		</div>
	</main>
</div>
