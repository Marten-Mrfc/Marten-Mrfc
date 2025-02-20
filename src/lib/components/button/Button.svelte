<script lang="ts">
  import type { ButtonProps, ButtonSize, ButtonVariant } from './types';
  
  export let text: string;
  export let onClick: () => void = () => {};
  export let variant: ButtonVariant = 'primary';
  export let size: ButtonSize = 'md';
  export let disabled = false;
  export let loading = false;
  export let fullWidth = false;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gray-900 hover:bg-gray-800 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-gray-900 hover:bg-gray-100 text-gray-900',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    scroll: ''
  };
</script>

{#if variant === 'scroll'}
  <button 
    on:click={onClick}
    disabled={disabled}
    class="scroll-button absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white"
  >
    ↓
  </button>
{:else}
  <button 
    on:click={onClick}
    disabled={disabled}
    class="rounded-full shadow-md uppercase tracking-wider duration-200 {sizeClasses[size]} {variantClasses[variant]} {fullWidth ? 'w-full' : ''} {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
  >
    {#if loading}
      <span class="inline-block animate-spin mr-2">↻</span>
    {/if}
    {text}
  </button>
{/if}

<style>
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