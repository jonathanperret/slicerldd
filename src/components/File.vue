<template>
  <div>
    <span v-on:click="renderForm">{{file.filename}}</span>
    <file-form :file="file" v-if="file.current"></file-form>
  </div>
</template>
<script>
import FileForm from 'components/FileForm';

export default {
  name: 'file',
  components: {FileForm},
  props: ['file'],
  methods: {
    renderForm: function () {
      this.$emit('changeCurrent', this.file);
    }
  }
};
</script>
