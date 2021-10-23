<template>
 <div class="container">
       <img class="image" v-bind:src="yourLogo" alt="yourLogo">
        
         <div class="pages"><span><i class="fas fa-home"></i> Homepage</span></div>
         <div class="pages"><span><i class="fas fa-users"></i> About</span></div>
         <div class="pages"><span><i class="fas fa-plus"></i> Add Task</span></div>

         <div class="social">
            <a href="https://linkedin.com/in/abdullah-dar%C3%A7%C4%B1n/" class="fab fa-linkedin" target="_blank"></a>
            <a href="https://github.com/abdullahhdarcin" class="fab fa-github" target="_blank"></a>
         </div>
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