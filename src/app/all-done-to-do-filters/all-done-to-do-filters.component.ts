import { Component } from "@angular/core"
import { TaskService } from "../task.service"

@Component({

  selector: "app-all-done-to-do-filters",
  standalone: true,
  imports: [],
  templateUrl: "./all-done-to-do-filters.component.html",
  styleUrl: "./all-done-to-do-filters.component.css"
})

export class AllDoneToDoFiltersComponent {

  category?: string

  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {

    this.category = this.taskService.getCategory()
  }

  handleClick(category: string): void {

    this.category = category
    this.taskService.categoriesTasks(this.category)
  }
}
