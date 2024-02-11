<template>
  <div class="flex flex-col">
    <div class="rounded p-5">
      <DataTable
        :value="items"
        size="small"
        sort-field="priority"
        :sortOrder="1"
        resizableColumns
        columnResizeMode="fit"
        showGridlines
      >
        <template #header>
          <div class="flex justify-end">
            <SplitButton
              label="User Story"
              icon="pi pi-plus"
              @click="openUserStoryDialog()"
              :model="addDropDownItems"
            />
          </div>
        </template>
        <Column
          field="priority"
          header="Priority"
          style="width: 100px;"
          sortable
        ></Column>
        <Column
          field="title"
          header="Title"
        ></Column>
        <Column
          field="type"
          header="Type"
          style="width: 150px;"
          sortable
        ></Column>
        <Column
          header=""
          style="width: 100px;"
          class="text-center"
        >
            <template #body="item">
              <Button
                icon="pi pi-pencil"
                aria-label="Edit Backlog Item"
                size="small"
                text
                rounded
                class="w-8 h-8 !p-0 me-2"
                @click="edit(item.data)"
              />
              <Button
                icon="pi pi-trash"
                aria-label="Delete Backlog Item"
                severity="danger"
                size="small"
                text
                rounded
                class="w-8 h-8 !p-0"
                @click="confirmDelete(item.data)"
              />
            </template>
        </Column>
      </DataTable>
    </div>
    
    <UserStory ref="userStoryDialog" />
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import type { BacklogItem } from '~/models'
import { BacklogItemType } from '~/models/enums'

const userStoryDialog: Ref<any> = ref()

const items: Ref<BacklogItem[]> = ref([
  { 
    priority: 40,
    title: 'Fix the ringing noise I hear in my ears',
    type: BacklogItemType.Bug
  } as BacklogItem,
  {
    priority: 21,
    title: 'Add a button to the Backlog view',
    type: BacklogItemType.UserStory
  } as BacklogItem,
  {
    priority: 89,
    title: 'Every time I sneeze my screen goes black for a second',
    type: BacklogItemType.Bug
  } as BacklogItem,
  {
    priority: 38,
    title: 'Shift every item over one pixel',
    type: BacklogItemType.UserStory
  } as BacklogItem
])

const addDropDownItems: Ref<any[]> = ref([
  {
    label: 'Add Bug',
    icon: 'pi pi-plus',
    command: () => {
      openBugDialog()
    }
  }
])

function openUserStoryDialog() {
  const dialogHeader: string = 'Add User Story'
  userStoryDialog.value.show(dialogHeader)
}

function openBugDialog() {
  const dialogHeader: string = 'Add Bug'
  userStoryDialog.value.show(dialogHeader)
}

function edit(item: any) {
  openUserStoryDialog();
  console.log(item);
}

function confirmDelete(item: any) {
  console.log(item);
}
</script>