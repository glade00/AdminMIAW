import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  name: '';
  isEditMode: '';
  form: FormGroup;

  constructor(private clientsService: ClientsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.isEditMode = this.route.snapshot.data.edit;
    if (this.route.snapshot.data.edit) {
      this.getData();
    }
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      date: [''],
      type: ['']
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.edit();
    } else {
      this.add();
    }
  }

  add() {
    this.clientsService.addClient(this.form.value).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }

  edit() {
    this.clientsService.updateClient(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(response => {
      this.router.navigate(['/clients']);
    })
  }

  getData() {
    this.clientsService
      .getClient(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        this.form.patchValue(response);
      });
  }
}
