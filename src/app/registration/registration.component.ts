import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private register:RegistrationService){}

  registerForm(data:object):void{
    this.register.userReagistration(data).subscribe((result)=>{
      console.warn(result)
    })
  }
 
}
 