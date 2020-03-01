<template>
  <div id="app">
    <Header />
    <Sidebar />
    <div class="header-space"></div>
    <div class="content">
      <div class="sidebar-space"></div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
  }
  .header-space {
    height: 5em;
    width: 100%;
  }

  .sidebar-space {
    width: 15em;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }

  .main-content {
    flex-grow: 1;
  }
</style>
