import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: '';
  form: FormGroup;

  constructor(private clientsService: ClientsService, private fb: FormBuilder, private router: Router, private tokenStorageService: TokenStorageService, private userService: UserService) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      ussername: [''],
      password: ['']
    });
  }
  login() {
    this.userService.connect(this.form.value).subscribe(response => {
      this.tokenStorageService.setToken(response['access_token']);
      this.router.navigate(['/dashboard']);
    })
  }


}
