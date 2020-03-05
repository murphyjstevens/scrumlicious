<template>
  <div class="sidebar">
    <router-link to="/" class="sidebar-item">
      <i class="fas fa-home sidebar-item-icon"></i>
      <div class="sidebar-item-text">Dashboard</div>
    </router-link>
    <router-link to="/Backlog" class="sidebar-item">
      <i class="fas fa-chalkboard sidebar-item-icon"></i>
      <div class="sidebar-item-text">Backlog</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 3em;
    bottom: 0;
    width: 15em;
    background-color: lightgray;
    padding: 1em 0;
  }

  .sidebar-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    padding: 0.5em 1em;
    text-decoration: none;
  }

  .sidebar-item:hover {
    background-color: lightblue;
  }

  .sidebar-item-icon {
    margin-right: 5px;
    font-size: 1em;
  }

  .sidebar-item-text {
    color: var(--dark-gray);
  }
</style>