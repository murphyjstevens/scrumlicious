<template>
  <Dialog
    v-model:visible="displayDialog"
    :maximizable="true"
    :modal="true"
    :style="{width: '80vw', minHeight: '50vh', maxHeight: '90vh'}"
  >
    <template #header>
      <div class="flex items-center grow">
        <i class="pi pi-book text-2xl text-primary-300 me-2" v-tooltip.top="'User Story'"/>
        <InputText
          type="text"
          v-model="title"
          placeholder="Insert title here"
          class="!bg-transparent !border-transparent text-lg grow hover:!border-inherit"
        />
      </div>
    </template>
    <div class="flex flex-col grow">
      <Panel
        header="Details"
        toggleable
        class="mb-2"
      >
        <Dropdown
          v-model="selectedStatus"
          :options="statuses"
          optionLabel="display"
          placeholder="Select the Status"
        />
      </Panel>
      <Panel header="Description" toggleable>
        <Textarea
          v-model="description"
          rows="5"
          resize="none"
        />
      </Panel>
    </div>
    <template #footer>
      <Button
        label="Save"
        class="ms-2"
        @click="save"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { BacklogItemStatus } from '~/models/enums';

defineExpose({
  show
})

const header: Ref<string> = ref('')
const title: Ref<string> = ref('')
const description: Ref<string> = ref('')
const selectedStatus: Ref<any> = ref(null)
const statuses: Ref<any[]> = ref([
  { id: BacklogItemStatus.New, display: 'New'},
  { id: BacklogItemStatus.Pending, display: 'Pending'},
  { id: BacklogItemStatus.Done, display: 'Done'},
  { id: BacklogItemStatus.Removed, display: 'Removed'}
])
const displayDialog: Ref<boolean> = ref(false)

function show(dialogHeader: string) {
  header.value = dialogHeader
  displayDialog.value = true
}

function save() {
  closeDialog();
}

function closeDialog() {
  displayDialog.value = false;
  title.value = '';
}
</script>