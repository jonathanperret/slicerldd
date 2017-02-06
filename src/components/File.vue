<template>
  <div>
    <span v-on:click="renderForm">{{file.filename}}</span>
    <file-detail :file="file" v-if="file.current"></file-detail>
  </div>
</template>
<script>
export default {
  name: 'file'
  props: ['file'],
  methods: {
    renderForm: function() {
      this.$emit('changeCurrent', this.file);
    }
  }
});
</script>
