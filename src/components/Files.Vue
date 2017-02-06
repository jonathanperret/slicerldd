<template>
<ul>
  <file v-on:changeCurrent="changeCurrent" v-for="file in files" :file="file"></file>
</ul>
</template>

<script>
export default {
    name: 'files',
    props: ['files'],
    methods: {
        changeCurrent: function(e) {
            this.files.forEach(function(file) {
                if (file.current) {
                    file.current = false;
                }
                if (file == e) {
                    file.current = true;
                }
            })
        }
    }
};
</script>
