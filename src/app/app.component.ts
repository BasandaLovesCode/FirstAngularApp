import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //variables inside a class a class variables therefore we
//dont use let keyword to declare
username:string = '';
password:string='';
errmessage:string='';
//hardcode the values for now
//if we dont want these to be modified from outside
//component we can declare them as private and readonly
realusername:string='inf354';
realpassword:string='abcde';
//logic of program , in login function/method
login()
{
if(this.username ==this.realusername &&
this.password==this.realpassword)
this.errmessage = "Login successful";
else
this.errmessage="Login unsuccesful";
}
}
