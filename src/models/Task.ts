import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  title: string;
  description:string
  completed: boolean;

  constructor(title: string, description: string) {
    super();
    this.title = title;
    this.description = description
    this.completed = false;
  }
}

export default Task;
