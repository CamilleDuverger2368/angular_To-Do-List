import { Component, Input, Output, EventEmitter } from "@angular/core"
import { NgIf } from "@angular/common"
import { TaskService } from "../task.service"
import { Task } from "../task"

@Component({

  selector: "app-task-details",
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: "./task-details.component.html",
  styleUrl: "./task-details.component.css"
})

export class TaskDetailsComponent {

  @Input() task?: Task
  @Input() editingTask?: Task
  @Output() editingTaskChange = new EventEmitter<Task>()

  constructor(private taskService: TaskService) {}

  onCheck(task: Task): void {

    task.done = !task.done
  }

  onEdit(task: Task): void {

    this.editingTask = task
    this.editingTaskChange.emit(this.editingTask)
  }
  
  onRemove(task: Task): void {

    this.taskService.deleteTask(task)
  }
}
