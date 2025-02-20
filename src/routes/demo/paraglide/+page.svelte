<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
</div>
