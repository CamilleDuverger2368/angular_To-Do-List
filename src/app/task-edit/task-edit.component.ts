import { Component, Input, Output, EventEmitter } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { NgIf } from "@angular/common"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({

  selector: "app-task-edit",
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: "./task-edit.component.html",
  styleUrl: "./task-edit.component.css"
})

export class TaskEditComponent {

  @Input() task?: Task
  @Input() editingTask?: Task
  @Output() editingTaskChange = new EventEmitter<Task>()
  text: string = ''
  velocity: string = ''

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    if (this.task) {

      this.text = this.task.text
      this.velocity = this.task.velocity
    }
  }

  onCheck(task: Task): void {

    task.done = !task.done
  }
  
  onRemove(task: Task): void {

    this.taskService.deleteTask(task)
  }

  onSubmit(task: Task): void {

    task.text = this.text
    task.velocity = this.velocity
    this.taskService.editTask(task)
    this.editingTask = undefined
    this.editingTaskChange.emit(this.editingTask)
  }
}
