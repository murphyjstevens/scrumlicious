<template>
  <div class="sidebar">
    <a href="/" class="sidebar-item">
      <b-icon icon="columns" class="sidebar-item-icon"></b-icon>
      <div class="sidebar-item-text">Dashboard</div>
    </a>
    <a href="/" class="sidebar-item">
      <b-icon icon="bucket" class="sidebar-item-icon"></b-icon>
      <div class="sidebar-item-text">Backlog</div>
    </a>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  components: {
    BIcon
  },
  name: 'Sidebar'
}
</script>

<style scoped>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 5em;
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
    height: 1.5em;
    width: 1.5em;
    margin-right: 5px;
    fill: var(--dark-gray);
  }

  .sidebar-item-text {
    color: var(--dark-gray);
  }
</style>