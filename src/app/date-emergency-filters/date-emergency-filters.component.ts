import { Component } from "@angular/core"
import { TaskService } from "../task.service"

@Component({

  selector: "app-date-emergency-filters",
  standalone: true,
  imports: [],
  templateUrl: "./date-emergency-filters.component.html",
  styleUrl: "./date-emergency-filters.component.css"
})

export class DateEmergencyFiltersComponent {

  filter?: string

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    this.filter = this.taskService.getFilter()
  }

  handleDate(): void {

    this.filter === "asc" ? this.filter = "desc" : this.filter = "asc"
    this.taskService.filterTasks(this.filter)
  }

  handleEmergency(): void {

    this.filter === "hot" ? this.filter = "low" : this.filter = "hot"
    this.taskService.filterTasks(this.filter)
  }
}
