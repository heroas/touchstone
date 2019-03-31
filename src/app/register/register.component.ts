import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService, UserService } from '../_services';
import { Router, } from '@angular/router';
import {matchOtherValidator} from '../_helper'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      cpassword: ['', [Validators.required, Validators.minLength(3),matchOtherValidator('password')]]
    });
  }

  get f() { return this.registerForm.controls; }

  register() {
    if (this.registerForm.invalid) {
      console.log('invalid')
      console.log(this.registerForm)
      return;
    }

    this.userService.register(this.registerForm.value);
    this.router.navigate(['login']);

  }

  goBack(){
    this.router.navigate(['login']);
  }

}
