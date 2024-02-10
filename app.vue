<template>
  <div class="flex flex-col">
    <Header />
    <Sidebar />
    <div class="w-full h-12"></div>
    <div class="flex align-stretch">
      <div class="w-60 justify-self-start"></div>
      <div class="grow">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>


<style lang="postcss">
  body {
    @apply min-h-screen bg-white dark:bg-slate-900 dark:text-slate-200;
  }
</style>