<template>
<div class="mainpage">
    <Home />
</div>
  
</template>


<script>

import Home from '@/views/Home/Home.vue'
import AddTask from '@/views/AddTask/AddTask.vue'
export default {
components:{Home,AddTask}
}
</script>

<style>
.mainpage{
    border-radius: 8px;
    position: fixed;
    width:85%;
    height:95%;
    margin-left: 190px;
    margin-top: 5px;
}


</style>