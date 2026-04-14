// ============================================================
// TEMPLATE-DRIVEN FORM (FormsModule)
// ============================================================
// The KEY idea: the form is described IN THE HTML using directives.
// Angular reads [(ngModel)] and builds the form model FOR you.
// Your TypeScript class only holds plain variables and one method.
// ============================================================

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- needed for [(ngModel)]
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template-login',
  imports: [FormsModule, NgIf],
  templateUrl: './template-login.component.html',
  styleUrl: './template-login.component.css'
})
export class TemplateLoginComponent {

  // These are plain class properties.
  // [(ngModel)] in the HTML binds the input fields to these.
  username: string = '';
  password: string = '';
  message: string = '';

  // Hard-coded credentials for demo purposes
  readonly validUsername = 'inf354';
  readonly validPassword = 'abcde';

  // Called when the form is submitted via (ngSubmit)
  login(): void {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.message = 'Login successful!';
    } else {
      this.message = 'Login unsuccessful. Try inf354 / abcde';
    }
  }
}
