import { defineComponent } from "vue";
import Task from "../../models/Task";

export default defineComponent({
	name: "AddTask",
	data() {
		return {
			tasktitle: "",
            taskdescription :""
		};
	},
	methods: {
		addTask(): void {
			if (this.tasktitle !== "") {
				const newTask = new Task(this.tasktitle,this.taskdescription);
				this.$store.commit("setTask", newTask);
				this.tasktitle = "";
                this.taskdescription = "",
				this.$router.push("/");
			}
		}
	}
});
