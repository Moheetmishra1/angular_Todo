import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import {DUMMY_USERS} from "../dummy-users"
// import { UserType } from './user.model';

let randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

interface UserType  {
    id:string;
    name:String;
    avatar:string;
}

@Component({
    selector:"app-user",
    standalone:true,
    imports:[],
    templateUrl:"./user.component.html", 
    styleUrl:"./user.component.css"
})


export class userComponent {
    //~ Decorator Inmput
    // @Input({required:true}) avatar !:string;
    // @Input({required:true}) name!:string; 
    
    // @Input({required: true}) id !: string; 
    //^ Signal input
    // avatar=input<string>("intial value");
    // avatar= input.required<string>();
    // name= input.required<string>();
    

    //~taking object as a id 
    @Input({required:true}) user !:UserType;
    //^ pass the data from child component to parant component we use "Output" decorator.
    //! using decorator
    // @Output () select = new EventEmitter()

    @Input({required:true}) selected !: boolean;

    //~ using signal
    select = output<string>()

    imagePath= computed(()=>{
        return "assets/users/" + this.user.avatar
    })


    // get imagePath(){
    //     return "assets/users/" + this.avatar;``
    // }
    onUserClick (){
        this.select.emit(this.user.id)
        
    }

}