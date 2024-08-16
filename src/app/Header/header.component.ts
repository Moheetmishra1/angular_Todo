import {Component} from "@angular/core"
import { userComponent } from "../User/user.component";

@Component({
    selector:"app-header",
    standalone:true,
    imports:[userComponent],
    templateUrl:"./header.component.html",
    styleUrl:"./header.component.css"
})



export class headerComponent {};
