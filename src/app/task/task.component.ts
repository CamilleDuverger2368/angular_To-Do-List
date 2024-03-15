import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { NgFor, NgIf } from "@angular/common"
import { TaskEditComponent } from "../task-edit/task-edit.component"
import { TaskDetailsComponent } from "../task-details/task-details.component"
import { AddTaskComponent } from "../add-task/add-task.component"
import { DateEmergencyFiltersComponent } from "../date-emergency-filters/date-emergency-filters.component"
import { AllDoneToDoFiltersComponent } from "../all-done-to-do-filters/all-done-to-do-filters.component"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({

  selector: "app-task",
  standalone: true,
  imports: [ 
    NgFor,
    NgIf,
    FormsModule,
    TaskEditComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    DateEmergencyFiltersComponent,
    AllDoneToDoFiltersComponent
  ],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css"
})

export class TaskComponent {

  tasks: Task[] = []
  filtered: Task[] = []
  editingTask?: Task

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    this.getTasks()
  }

  ngDoCheck(): void {

    this.getTasks()
  }


  getTasks(): void {

    this.tasks = this.taskService.getTasks()
    this.filtered = this.taskService.getFiltered()
  }
}