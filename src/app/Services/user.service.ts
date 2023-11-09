import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.services"

@Injectable()
export class userService{
    constructor(private logger: LoggerService){}

    users =[
        {name:'John', status:'active'},
        {name:'Mark', status:'inactive'},
        {name:'Steve', status:'active'} 
    ]

    addNewUser(name:string, status:string){
        this.users.push({name: name, status:status})
        this.logger.logMessage(name,status)
    }
}