import { Component, OnInit } from '@angular/core';
import { userService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [userService]
})
export class AppComponent implements OnInit{
  
  title = 'userservice';
  constructor(private userService: userService){}

  users:{name:string, status: string}[]=[];

  ngOnInit(){
    this.users =this.userService.users
  }
  

}
