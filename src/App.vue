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
    height: 3em;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }

  .sidebar-space {
    justify-self: flex-start;
    width: 15em;
  }

  .main-content {
    flex-grow: 1;
  }

  .p-datatable table {
    table-layout: auto !important;
  }

  .p-dialog-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
