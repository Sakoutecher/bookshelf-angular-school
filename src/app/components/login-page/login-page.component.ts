import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageModel } from 'src/app/models/login-page.model';
import { LoginPageService } from 'src/app/services/login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  info!: LoginPageModel
  login!: string
  password!: string

  constructor(private loginService: LoginPageService, private router: Router) {}

  onKeyUpLogin(event: Event) {
    const login = (event.target as HTMLInputElement).value
    this.login = login
  }

  onKeyUpPassword(event: Event) {
    const password = (event.target as HTMLInputElement).value
    this.password = password
  }

  onSubmit() {
    if (this.loginService.verifConnect(this.login, this.password)) {
      this.router.navigateByUrl('welcome')
    } else {
      this.router.navigateByUrl('')
    }
  }

  ngOnInit(): void {

  }

}
