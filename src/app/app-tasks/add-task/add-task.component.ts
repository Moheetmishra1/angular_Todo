import { FunctionExpr } from '@angular/compiler';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  showAddBox= output<boolean>()
  task= {title:"",summary:"",date:""}
  update(e:Event){
    console.log(typeof e);
    console.log({... e.target});
    // console.log(e.target.name);
    
    
    
  }
  sendData(){
    
  }
  cancel(){
    this.showAddBox.emit(false)
  }

}
