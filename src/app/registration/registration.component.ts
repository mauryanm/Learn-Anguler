import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private register:RegistrationService, private router:Router){}

  registerForm(data:object):void{
    this.register.userReagistration(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['thank-you']);
      }
    })
  }
 
}
 