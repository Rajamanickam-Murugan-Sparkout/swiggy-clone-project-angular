import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUserData:any;

  constructor(private userData: DataService){

  }

  loginForm = new FormGroup({
    'email': new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    'password': new FormControl('', Validators.required),
    'rememberMe': new FormControl(false, Validators.requiredTrue)
  })

  loginUserDetails(userDetails: any){
    // console.log(userDetails);
    this.userData.loginUser(userDetails).subscribe((Details)=>{
      this.loginUserData= Details;
      console.log('Details', this.loginUserData);
  })
}

}
