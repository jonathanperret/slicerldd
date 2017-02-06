<template>
  <div>
    Extruder
    <select v-model="file.extruder">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    <select>
  </div>
</template>

<script>
export default {
  name: 'file-form',
  props: ['file']
};
</script>
