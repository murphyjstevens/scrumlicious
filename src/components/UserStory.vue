<template>
    <Dialog :header="header" :visible.sync="displayDialog" :style="{width: '80vw', minHeight: '50vh', maxHeight: '90vh'}">
      <div class="dialog-content">
        <InputText type="text" v-model="title" placeholder="Insert title here" class="work-item-title" />
        <span class="form-header margin-top">Description</span>
        <Editor v-model="description" editorStyle="height: 320px"/>
      </div>
      <template #footer>
        <Button label="Save" class="dialog-button" @click="save" />
        <Button label="Cancel" class="dialog-button p-button-secondary" @click="closeDialog" />
      </template>
    </Dialog>
</template>

<script>
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Editor from 'primevue/editor'
import InputText from 'primevue/inputtext'

export default {
  components: {
    Button,
    Dialog,
    Editor,
    InputText
  },
  props: ['header', 'value'],
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    save() {
      this.closeDialog();
    },
    closeDialog() {
      this.displayDialog = false;
      this.title = '';
    }
  },
  computed: {
    displayDialog: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style scoped>
.dialog-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.work-item-title {
  font-size: 18px;
  border-width: 0 0 1px 0;
  margin-bottom: 5px;
}

.margin-top {
  margin-top: 5px;
}

.form-header {
  font-size: 16px;
  margin-bottom: 2px;
}

.dialog-button {
  margin-left: 5px;
}
</style>