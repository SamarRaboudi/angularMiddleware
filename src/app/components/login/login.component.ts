import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateform from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
type: string = "password";
isText: boolean= false;
eyeIcon: string = "fa-eye-slash";
loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText? this.type ="text" : this.type="password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      //send the obj to database
     

    }
    else{
      //throw the error using toaster and with required fields
      validateform.validateAllFormFields(this.loginForm);
      //alert("your form is invalid");
    }
  }

}
