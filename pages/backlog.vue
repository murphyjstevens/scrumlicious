<template>
  <div class="flex flex-col">
    <div class="rounded p-5">
      <div class="flex flex-row mx-2">
        <SplitButton label="User Story" icon="pi pi-plus" @click="openUserStoryDialog()" :model="addDropDownItems"/>
      </div>
      <DataTable :value="items">
        <Column field="priority" header="Priority" sortable></Column>
        <Column field="title" header="Title"></Column>
        <Column field="type" header="Type" sortable></Column>
        <Column header="">
            <template #body="item">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="edit(item.data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDelete(item.data)" />
            </template>
        </Column>
      </DataTable>
    </div>
    
    <UserStory ref="userStoryDialog" :header=userStoryDialogHeader />
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

const items: Ref<any[]> = ref([
  { priority: 40, title: 'Dickerson', type: 'Bug' },
  { priority: 21, title: 'Larsen', type: 'UserStory' },
  { priority: 89, title: 'Geneva', type: 'Bug' },
  { priority: 38, title: 'Jami', type: 'UserStory' }
])

const addDropDownItems: Ref<any[]> = ref([
  {
    label: 'Add Bug',
    icon: 'fas fa-plus',
    command: () => {
      openBugDialog()
    }
  }
])

const userStoryDialogHeader: Ref<string> = ref('')

const userStoryDialog: Ref<any> = ref()

function openUserStoryDialog() {
  userStoryDialogHeader.value = 'Add User Story'
  userStoryDialog.value.show()
}

function openBugDialog() {
  userStoryDialogHeader.value = 'Add Bug'
  userStoryDialog.value.show()
}

function edit(item: any) {
  openUserStoryDialog();
  console.log(item);
}

function confirmDelete(item: any) {
  console.log(item);
}
</script>