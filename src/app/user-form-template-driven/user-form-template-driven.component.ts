import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-template-driven',
  templateUrl: './user-form-template-driven.component.html',
  styleUrls: ['./user-form-template-driven.component.css']
})
export class UserFormTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  formData = {
    name: '',
    email: '',
    age: null
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.formData = form.value;
      this.submitted = true;
    }
  }

}
