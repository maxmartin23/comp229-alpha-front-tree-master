import { Injectable } from "@angular/core";
import { User } from './user.model';

@Injectable()
export class UserRepository
{
    private users : User[] = [];
    private userDataSource : any;    
}
