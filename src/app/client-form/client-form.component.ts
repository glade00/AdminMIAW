import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  name: '';
  form: FormGroup;

  constructor(private clientsService: ClientsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      date: [''],
      type: ['']
    });
  }

  add() {
    this.clientsService.addClient(this.form.value).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }
}