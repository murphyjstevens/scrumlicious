<template>
  <div class="flex-column">
    <div class="container">
      <div class="flex-row button-row">
        <SplitButton label="User Story" icon="fas fa-plus" @click="openUserStoryDialog()" :model="addDropDownItems"/>
      </div>
      <DataTable :value="items" :resizableColumns="true" columnResizeMode="fit">
          <Column field="priority" header="Priority" sortable></Column>
          <Column field="title" header="Title"></Column>
          <Column field="type" header="Type" sortable></Column>
          <Column>
              <template #body="item">
                  <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="edit(item.data)" />
                  <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDelete(item.data)" />
              </template>
          </Column>
      </DataTable>
    </div>
    
    <UserStory v-model="displayUserStoryDialog" :header=userStoryDialogHeader />
  </div>
</template>

<script>
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import SplitButton from 'primevue/splitbutton'

import UserStory from './UserStory'

export default {
  components: {
    Button,
    Column,
    DataTable,
    SplitButton,
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
    },
    edit(item) {
      this.openUserStoryDialog();
      console.log(item);
    },
    confirmDelete(item) {
      console.log(item);
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: white;
    padding: 20px;
    border-radius: 1%;
  }

  .button-row {
    margin: 5px 0;
  }
</style>