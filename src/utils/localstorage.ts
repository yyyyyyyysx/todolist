import { MyDate } from "../domain/MyDate.ts"
import { Task } from "../domain/Task.ts"

export class LSUtils {
  static getTasks(date: Date): Array<Task> {
    let myDate = new MyDate(date);
    let string = localStorage.getItem(myDate.toString());
    let tasks = string === null ? [] : string.split('&');
    return tasks.map((task) => {
      let info = task.split('-');
      return new Task(date, info[0], info[1])
    })
  }

  static addTask(date: Date, title: string, content: string): void {
    let task = new Task(date, title, content)
    let tasklist = localStorage.getItem(task.date.toString())
    console.log(tasklist);
    
    if(tasklist) {
      tasklist = tasklist + '&' + task.toString();
      localStorage.setItem(task.date.toString(), tasklist);
    } else { 
      localStorage.setItem(task.date.toString(), task.toString());
    }
  }
}