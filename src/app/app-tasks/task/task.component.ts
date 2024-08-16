import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { TaskType } from './task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class TaskComponent {
  @Input({required:true}) task !: TaskType;
  completeTask = output<string>()

  onCompletedTask(){
    this.completeTask.emit(this.task.id)
  }


}
