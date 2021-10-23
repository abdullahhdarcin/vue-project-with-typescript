<template>
 <div class="container">
       <img class="image" v-bind:src="yourLogo" alt="yourLogo">
        
         <div class="pages"><span>Homepage</span></div>
         <div class="pages"><span>About</span></div>
         <div class="pages"><span>Add Task</span></div>
      
 </div>
</template>

<script>
export default {
   data(){
      return {
         yourLogo : require('@/assets/Logo/SampleLogo.png')
      }
   }

}
</script>

<style lang="scss" src="../Sidebar/Sidebar.scss" scoped>

</style>