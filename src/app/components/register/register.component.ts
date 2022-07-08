import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 *
 * @param form
 */
// @ts-ignore
function passwordMatchValidator(form){
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordsMatch: true})
  }
  else{
    confirmPassword.setErrors(null)
  }
  return null

}
// @ts-ignore
function symbolValidator(control){    //control = registerForm.get('password)
  if(control.hasError('required')) return null
  if(control.value.indexOf('*') > -1){
    return null
  }
  else{
    return {symbol: true}
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }
  buildForm(){
    this.registerForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      username: ['',Validators.required],
      password: ['',[Validators.required, symbolValidator, Validators.minLength(8)]],
      confirmPassword: ''
    },{
      validators: passwordMatchValidator
    })
  }
  register(){
    console.log(this.registerForm.value)
  }

}
