<script>
    import Header from "$lib/components/Header/Header.svelte";
    import AboutMe from "$lib/components/AboutMe/AboutMe.svelte";
    import Projects from "$lib/components/Projects/Projects.svelte";
</script>

<Header/>

<main class="flex-1 px-4 bg-gray-900">
    <section id="about-me">
        <AboutMe 
            imageUrl="https://gravatar.com/avatar/40b879e5f0a94a8046864df609f0d932?size=256" 
            altText="My Logo" 
            description="Hey, ik ben Marten!"
        />
    </section>
    <section id="projects">
        <Projects/>
    </section>
</main>