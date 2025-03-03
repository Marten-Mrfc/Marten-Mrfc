<script>
	export let imageUrl = '';
	export let description = '';
	export let altText = ''; // Add altText prop for accessibility
</script>

<div class="about-me flex flex-col items-center bg-gray-900 px-4 py-8 text-white md:flex-row">
	<img
		src={imageUrl}
		alt={altText}
		class="w-full max-w-xs rounded-full shadow-lg md:mr-8 md:w-auto md:max-w-none"
	/>
	<div class="description mt-4 flex-1 text-lg md:mt-0">
		<h2 class="mb-4 text-3xl font-bold">About Me</h2>
		<p class="text-gray-100">{description}</p>
		<ul class="mt-4 space-y-2">
			<li>🔭 I'm currently working on a cool project</li>
			<li>🌱 I'm learning Svelte</li>
			<li>👯 I'm looking to collaborate on open source projects</li>
			<li>💬 Want to chat?</li>
			<li class="ml-8">
				📫 Via my email:
				<a
					class="text-blue-500 underline hover:text-blue-700"
					href="mailto:martensog@gmail.com"
					aria-label="Send an email to Marten"
				>
					martensog@gmail.com
				</a>
				<br />
				🟪 Via my discord: marten_mrfcyt
			</li>
		</ul>
	</div>
</div>
