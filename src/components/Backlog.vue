<template>
  <div class="flex-column">
    <div class="flex-row button-row">
      <SplitButton label="User Story" icon="fas fa-plus" @click="openUserStoryDialog()" :model="addDropDownItems"/>
    </div>
    <DataTable :value="items" :resizableColumns="true" columnResizeMode="fit">
        <Column field="priority" header="Priority"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="type" header="Type"></Column>
    </DataTable>
    
    <UserStory v-model="displayUserStoryDialog" :header=userStoryDialogHeader />
  </div>
</template>

<script>
import SplitButton from 'primevue/splitbutton'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'

import UserStory from './UserStory'

export default {
  components: {
    SplitButton,
    Column,
    DataTable,
    UserStory
  },
  name: 'Backlog',
  data() {
    return {
      items: [
        { priority: 40, title: 'Dickerson', type: 'Bug' },
        { priority: 21, title: 'Larsen', type: 'UserStory' },
        { priority: 89, title: 'Geneva', type: 'Bug' },
        { priority: 38, title: 'Jami', type: 'UserStory' }
      ],
      addDropDownItems: [
        {
          label: 'Add Bug',
					icon: 'fas fa-plus',
					command: () => {
						this.openBugDialog()
          }
        }
      ],
      displayUserStoryDialog: false,
      userStoryDialogHeader: ''
    }
  },
  methods: {
    openUserStoryDialog() {
      this.userStoryDialogHeader = 'Add User Story'
      this.displayUserStoryDialog = true
    },
    openBugDialog() {
      this.userStoryDialogHeader = 'Add Bug'
      this.displayUserStoryDialog = true
    }
  }
}
</script>

<style scoped>
  .button-row {
    margin: 5px 0;
  }
</style>