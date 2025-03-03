<script>
	import NavBar from '../NavBar/NavBar.svelte';
	import { base } from '$app/paths';
	import Button from '../button/Button.svelte';
	export let title = 'Welcome to my site';
	export let buttonText = 'Contact me';

	let subtitles = [
		"Hey, I'm Marten!",
		"I'm a developer",
		'I code in lots of languages',
		'I build minecraft plugins',
		"I'm learning Svelte and Kotlin",
		"I'm a passionate gamer",
		'I solve complex problems',
		'I love learning new tech',
	];
	let currentSubtitle = '';
	let subtitleIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let typingSpeed = 80;
	let pauseDelay = 1500;

	function typeWriter() {
		// Adjust typing speed based on action
		if (!isDeleting) {
			typingSpeed = 80; // Normal typing speed
		} else {
			typingSpeed = 50; // Faster when deleting
		}

		if (!isDeleting && charIndex < subtitles[subtitleIndex].length) {
			currentSubtitle += subtitles[subtitleIndex].charAt(charIndex);
			charIndex++;
			setTimeout(typeWriter, typingSpeed);
		} else if (isDeleting && charIndex > 0) {
			currentSubtitle = currentSubtitle.slice(0, -1);
			charIndex--;
			setTimeout(typeWriter, typingSpeed);
		} else {
			isDeleting = !isDeleting;
			if (!isDeleting) {
				subtitleIndex = (subtitleIndex + 1) % subtitles.length;
				setTimeout(typeWriter, 200); // Small pause before typing new text
			} else {
				setTimeout(typeWriter, pauseDelay); // Longer pause before deleting
			}
		}
	}

	typeWriter();

	function scrollToAboutMe() {
		document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<NavBar />
<header
	class="animated-gradient relative h-[89.1vh] bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 py-16 text-center text-white"
>
	<h1 class="mb-4 text-5xl font-bold tracking-wide">{title}</h1>
	<h2 class="mb-6 min-h-[1.5rem] text-3xl font-light">
		<span class="inline-block">{currentSubtitle}<span class="animate-pulse">|</span></span>
	</h2>
	<Button
		text={buttonText}
		variant="primary"
		size="md"
		onClick={() => (location.href = `${base}/contact`)}
	/>
	<Button on:click={scrollToAboutMe} text="↓" variant="scroll" />
</header>

<style>
	@keyframes gradientCycle {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animated-gradient {
		background-size: 400% 400%;
		animation: gradientCycle 8s ease-in-out infinite;
	}
</style>
