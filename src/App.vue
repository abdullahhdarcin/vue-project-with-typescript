<template>
<Sidebar/>
  <router-view/>
  <link 
rel="stylesheet" 
href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
crossorigin="anonymous">
</template>

<script lang="ts">
import Sidebar from '../src/views/Sidebar/Sidebar.vue'
import MainPage from '../src/views/MainPage.vue'

export default ({
  components: { Sidebar,MainPage },
});
</script>


<style lang="scss">
#app {
  font-family: 'Sofia Pro', sans-serif;
  @import url('http://fonts.cdnfonts.com/css/sofia-pro');
  @import url('https://kit.fontawesome.com/6fc105ad23.js');
  
}
</style>
