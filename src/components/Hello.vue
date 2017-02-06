<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <files :files="files"></files>
    <canvas width="400" height="300" ref="canvas">
    </canvas>
  </div>
</template>

<script>
import Files from 'components/Files';

export default {
  name: 'hello',
  components: {Files},
  data () {
    return {
      files: [
        {filename: 'test', current: false},
        {filename: 'test2', current: false}
      ],
      msg: 'Welcome to my web slicer !!!!!!!!'
    };
  },

  mounted () {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

canvas {
  border: 3px solid red;
}
</style>
