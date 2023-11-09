import { Injectable } from "@angular/core"


@Injectable()
export class LoggerService{
    logMessage(name:string, status:string){
        alert('A new user with username"'+name+'" with status "'+status+'" has been added')
    }
}