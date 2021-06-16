<template>
     <div> {{greet}} {{name}}</div>
     <div v-text="channel_"></div>
     <div v-html="channel"></div>
     <div v-html="hack"></div>
     <h2 v-bind:id="heading">this heading</h2>
     <button v-bind:disabled="isDisable">button</button>
     <h2 class="underline">underlined text</h2>
    <h2 v-bind:class="status">under</h2>
      <h2 v-bind:class="ispromoted && ''">under</h2> 


</template>



<script>
export default {
  name: 'App',
  data(){
    return{
      name:"cupbox",
      greet:"hello",
      channel_:"youtube",
      channel:"<b>youtube</b>",
      hack: `<a href="#" onclick="alert('you have been hacked')">click hack</a>`,
      heading: 'heading',
      isDisable:true,
      status:"danger",
      ispromoted=true,
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline{
  text-decoration: underline;
}

.promoted{
  font-style: italic;
}




</style>
