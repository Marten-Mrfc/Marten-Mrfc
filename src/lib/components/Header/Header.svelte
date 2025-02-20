<script>
  import NavBar from "../NavBar/NavBar.svelte";
  import Button from "../button/Button.svelte";
  export let title = "Welkom op mijn site";
  export let buttonText = "Neem contact op";

  let subtitles = ["Developer", "Gamer", "Student"];
  let currentSubtitle = "";
  let subtitleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
      if (!isDeleting && charIndex < subtitles[subtitleIndex].length) {
          currentSubtitle += subtitles[subtitleIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex > 0) {
          currentSubtitle = currentSubtitle.slice(0, -1);
          charIndex--;
          setTimeout(typeWriter, 100);
      } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
              subtitleIndex = (subtitleIndex + 1) % subtitles.length;
          }
          setTimeout(typeWriter, 2000);
      }
  }

  typeWriter();

  function scrollToAboutMe() {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

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
  @keyframes moveUpDown {
      0%, 100% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-10px);
      }
  }

  .scroll-button {
      font-size: 2rem;
      animation: moveUpDown 1s infinite;
  }
</style>

<NavBar/>
<header class="text-center py-16 bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 text-white animated-gradient h-[89.1vh] relative">
  <h1 class="text-5xl font-bold mb-4 tracking-wide">{title}</h1>
  <h2 class="text-3xl mb-6 font-light min-h-[1.5rem] animate-pulse">Ik ben een {currentSubtitle}</h2>
  <Button text={buttonText} variant="primary" size="md" onClick={() => location.href='/contact'} />
  <Button on:click={scrollToAboutMe} text="↓" variant="scroll" />
</header>