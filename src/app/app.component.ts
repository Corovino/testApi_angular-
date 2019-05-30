import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestApp';
  saludo = "Hola mundo";

  user : User[] = [];
  constructor( private _userService: UserService){
  }

 ngOnInit(){
      this.getUsers();   
 }
  getUsers(){
     this._userService.getAll().subscribe( users => {
        this.user =  users
        console.log(this.user)
     } )
  }


  par( numero : number): boolean{
    return numero % 2 === 0 ? true : false;
  }
}
