import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['test1@mail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log(resp);
      }, (err) => {
        console.log('Error: ', err);

      });
    console.log('submit');
    console.log(this.loginForm.value);

    // this.router.navigate(['/dashboard']);
  }

}
