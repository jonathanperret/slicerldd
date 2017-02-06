<template>
<ul>
  <file v-on:changeCurrent="changeCurrent" v-for="file in files" :file="file"></file>
</ul>
</template>

<script>
import File from 'components/File';
export default {
  name: 'files',
  components: {File},
  props: ['files'],
  methods: {
    changeCurrent: function (e) {
      this.files.forEach(function (file) {
        file.current = (file === e);
      });
    }
  }
};
</script>
