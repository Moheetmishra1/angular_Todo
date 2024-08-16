import { Component, Input, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})
export class AppTasksComponent {
  // name = input.required<string>();
  @Input() userId!:string;
  @Input({required:true})  name !:string  ;
  showAddTask=false;

  tasks=[
    {
      id:"t1",
      userId:"u1",
      title:"Master angular1",
      summary:"hejhkf fh fejh we wfe",
      dueDate:"2005-12-31"
    },
    {
      id:"t2",
      userId:"u1",
      title:"Master angular2",
      summary:"hejhkf fh fejh we wfe",
      dueDate:"2005-12-31"
    },
    {
      id:"t3",
      userId:"u4",
      title:"Master angular3",
      summary:"hejhkf fh fejh we wfe",
      dueDate:"2005-12-31"
    },
    {
      id:"t4",
      userId:"u2",
      title:"Master angular4",
      summary:"hejhkf fh fejh we wfe",
      dueDate:"2005-12-31"
    },
  ];
  get SelectedUserTasks(){
    return this.tasks.filter(task=>task.userId === this.userId) 
  }

  onCompleteTask(id:string){
    this.tasks= this.tasks.filter(task => task.id != id)
  }
  showAddTaskBox(){
    this.showAddTask=!this.showAddTask
  }
  showAddBox(e:boolean){
    this.showAddTask=e
  }

}
