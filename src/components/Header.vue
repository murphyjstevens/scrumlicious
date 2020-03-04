<template>
  <header class="header">
    <a href="/" class="header-brand">ScrumLicious</a>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>  
  header {
    height: 3em;
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--dark-gray);
    border-bottom: 1px solid black;
    color: white;
    padding: 0 1em;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
  }

  .header-brand {
    display: flex;
    align-self: center;
    color: white;
    font-size: 24px;
  }

  .header-brand:hover {
    color: lightgray;
    text-decoration: none;
  }
</style>