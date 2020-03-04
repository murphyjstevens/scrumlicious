<template>
  <div>
    <TabView>
      <TabPanel header="Backlog"><p>I'm the first tab</p></TabPanel>
      <TabPanel header="Second"><p>I'm the second tab</p></TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

export default {
  components: {
    TabView,
    TabPanel
  },
  name: 'Dashboard'
}
</script>

<style scoped>
</style>