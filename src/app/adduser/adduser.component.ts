 import { Component } from '@angular/core';
import { userService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
 // providers: [userService]
})
export class AdduserComponent {
  username: string ='';
  status: string = 'active'

  constructor(private userService: userService){}

  addUser(){
    this.userService.addNewUser(this.username, this.status)
   // console.log(this.userService.users)
  }

}
