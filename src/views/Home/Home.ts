import { defineComponent } from 'vue';
import  Task  from "../../models/Task";

export default defineComponent({
  name: 'Home',
  data() {
    return {
        tasks: [] as Task[],
    };
},
	mounted() {
		this.tasks = this.$store.state.tasks;
	}
});