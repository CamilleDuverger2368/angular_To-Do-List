import { Component } from "@angular/core"
import { FormsModule, NgForm } from "@angular/forms"
import { TaskService } from "../task.service"

@Component({

  selector: "app-add-task",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: "./add-task.component.html",
  styleUrl: "./add-task.component.css"
})

export class AddTaskComponent {

  id: number = 0

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    this.id = this.taskService.getId()
  }

  onSubmit(form: NgForm) {

    this.taskService.addTask({ id: this.id, text: form.value.text, velocity: form.value.velocity ? form.value.velocity : "medium", done: false})
    this.id = this.taskService.getId()
    form.reset({text: '', velocity: ''})
  }
}
