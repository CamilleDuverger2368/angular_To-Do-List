import { Injectable } from "@angular/core"
import { Task } from "./task"

@Injectable({

  providedIn: "root"
})

export class TaskService {

  tasks: Task[] = []
  filtered: Task[] = []
  id: number = 0
  filter: string = "asc"
  category: string = "all"

  // Id's section
  getId(): number {

    return(this.id)
  }

  incrId(): void {

    this.id++
  }

  // Tasks' section
  getTasks(): Task[] {

    return(this.tasks)
  }

  getFiltered(): Task[] {

    return(this.categoriesTasks(this.category))
  }

  addTask(task: Task): void {

    this.tasks.push(task)
    this.incrId()
    this.getFiltered()
  }

  editTask(task: Task): void {

    this.tasks = this.tasks.map( el => {

                    if (el.id === task.id) {

                      return(task)
                    } else {

                      return(el)
                    }
                  })
    this.getFiltered()
  }

  deleteTask(task: Task): void {

    let copiedTasks = [...this.tasks]
    this.tasks = copiedTasks.filter( el => el.id !== task.id)
    this.getFiltered()
  }

  // Filters' section
  getFilter(): string {

    return(this.filter)
  }

  filterTasks(filter: string): void {
    
    this.filter = filter

    switch (this.filter) {

      case "asc" : {

          let copiedArr = [...this.tasks]
          this.tasks = copiedArr.sort((a, b) => a.id - b.id)
          this.getFiltered()
          break
      }

      case "desc" : {

          let copiedArr = [...this.tasks]
          this.tasks = copiedArr.sort((a, b) => b.id - a.id)
          this.getFiltered()
          break
      }

      case "hot" : {

          const hot = this.tasks.filter(task => task.velocity === "hot")
          const medium = this.tasks.filter(task => task.velocity === "medium")
          const low = this.tasks.filter(task => task.velocity === "low")

          this.tasks = hot.concat(medium.concat(low))
          this.getFiltered()
          break
      }

      case "low" : {

          const hot = this.tasks.filter(task => task.velocity === "hot")
          const medium = this.tasks.filter(task => task.velocity === "medium")
          const low = this.tasks.filter(task => task.velocity === "low")

          this.tasks = low.concat(medium.concat(hot))
          this.getFiltered()
          break
      }

      default : {

          throw Error("unknown filter : " + filter)
      }
    }
  }

  // Category's section
  getCategory(): string {

    return(this.category)
  }

  categoriesTasks(category: string): Task[] {

    this.category = category

    switch (this.category) {

        case "all" : {
            
            return(this.tasks)
        }

        case "done" : {

            return(this.tasks.filter( task => task.done !== false))
        }

        case "to-do" : {

            return(this.tasks.filter( task => task.done === false))
        }

        default : {

            throw Error("unknown category: " + category)
        }
    }
  }
}