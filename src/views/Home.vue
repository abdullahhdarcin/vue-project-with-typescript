<template>
 <Sidebar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './Sidebar/Sidebar.vue'

export default defineComponent({
  name: 'Home',
  components: { Sidebar },
});
</script>
