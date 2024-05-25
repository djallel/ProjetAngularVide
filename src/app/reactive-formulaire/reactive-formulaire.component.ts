import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-formulaire',
  templateUrl: './reactive-formulaire.component.html',
  styleUrls: ['./reactive-formulaire.component.css']
})
export class ReactiveFormulaireComponent implements OnInit {
  userForm: FormGroup;
  parentData = 'Data from parent';
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      // Vous pouvez gérer les données du formulaire ici
    }
  }

}
