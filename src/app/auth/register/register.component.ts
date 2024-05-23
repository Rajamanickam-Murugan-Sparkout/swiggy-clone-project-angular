import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { registerUser } from 'src/interface/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUserData: any;

  constructor(private userData: DataService){

  }

  registrationForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    'password': new FormControl('', Validators.required),
    // 'confirmPassword': new FormControl('', Validators.required),
    'terms': new FormControl(false, Validators.requiredTrue)
  })

  registerUserDetails(userDetails: any){
    console.log(userDetails);
    this.userData.registerUser(userDetails).subscribe((Details)=>{
      this.registerUserData= Details;
      console.log('Details', this.registerUserData);
  } )

}

}
