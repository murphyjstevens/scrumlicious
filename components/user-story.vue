<template>
  <Dialog :visible.sync="displayDialog" :maximizable="true" :modal="true" :style="{width: '80vw', minHeight: '50vh', maxHeight: '90vh'}">
    <template #header>
      <div class="dialog-header-title">
        <i class="fas fa-book-reader dialog-title-icon" v-tooltip.top="'User Story'"/>
        <InputText type="text" v-model="title" placeholder="Insert title here" class="work-item-title" />
      </div>
    </template>
    <div class="flex-column dialog-content">
      <Fieldset class="field-set" legend="Details" :toggleable="false">
        <Dropdown v-model="selectedStatus" :options="statuses" optionLabel="display" placeholder="Select the Status" />
      </Fieldset>
      <Fieldset class="field-set" legend="Description" :toggleable="false">
        <Textarea v-model="description" rows="5" resize="none"/>
      </Fieldset>
    </div>
    <template #footer>
      <Button label="Cancel" class="dialog-button p-button-secondary" @click="closeDialog" />
      <Button label="Save" class="dialog-button" @click="save" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

defineProps<{
  header?: string
}>()

defineExpose({
  show
})

const title: Ref<string> = ref('')
const description: Ref<string> = ref('')
const selectedStatus: Ref<any> = ref(null)
const statuses: Ref<any[]> = ref([
  { id: 0, display: 'New'},
  { id: 1, display: 'Pending'},
  { id: 2, display: 'Paused'},
  { id: 3, display: 'Done'},
  { id: 4, display: 'Removed'}
])
const displayDialog: Ref<boolean> = ref(false)

function show() {
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

<style scoped>
.dialog-header-title {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
}

.dialog-title-icon {
  font-size: 24px;
  color: lightseagreen;
  margin-right: 5px;
}

.dialog-content {
  flex-grow: 1;
}

.work-item-title {
  font-size: 18px;
  border-color: transparent;
  margin-bottom: 5px;
  background-color: transparent;
  flex-grow: 1;
}
.work-item-title:hover {
  border-color: inherit;
}
.work-item-title:enabled:focus {
  background-color: white;
}

.margin-top {
  margin-top: 5px;
}

.field-set {
  margin: 5px;
}

.dialog-button {
  margin-left: 5px;
}
</style>