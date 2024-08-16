import { Component } from '@angular/core';
import {headerComponent} from "./Header/header.component"
import { userComponent } from './User/user.component';
import { DUMMY_USERS } from './dummy-users';
import { AppTasksComponent } from './app-tasks/app-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent,userComponent,AppTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId ?:string;
  get selectedUser (){
    return this.users.find(user=>user.id===this.selectedUserId )!; 

  }

  onSelectUser(id:string){
    this.selectedUserId=id;
    

    
  }
}
