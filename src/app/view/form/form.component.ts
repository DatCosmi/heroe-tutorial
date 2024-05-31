import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], // Cambié styleUrl a styleUrls
})
export class FormComponent implements OnInit {
  heroe = {
    id: '1',
    name: 'Edgar',
  };

  formGroup!: FormGroup;

  constructor(private formB: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      status: [false, Validators.required],
    });
  }

  submit() {
    this.userService.addData(this.formGroup.value);
  }
}
