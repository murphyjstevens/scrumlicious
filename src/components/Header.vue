<template>
  <header class="header">
    <a href="/" class="header-brand">ScrumLicious</a>
    <nav>
      <a class="nav-item" href="#projects">
        <span class="nav-item-span">Projects</span>
      </a>
      <a class="nav-item" href="#skills">
        <span class="nav-item-span">Skills</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped>  
  header {
    height: 5em;
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

  nav {
    display: flex;
    flex-direction: row;
    align-self: stretch;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 1em;
  }

  .nav-item:hover {
    color: lightgray;
  }

  .nav-item-span {
    color: inherit;
  }
</style>