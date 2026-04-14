// ============================================================
// REACTIVE FORM (ReactiveFormsModule)
// ============================================================
// The KEY idea: the form structure is built HERE IN TYPESCRIPT.
// You create a FormGroup that contains FormControls.
// The HTML template just "connects" to this model.
//
// Comparison with Template-Driven:
//   Template-Driven: HTML drives everything, TS just has plain vars
//   Reactive:        TS drives everything, HTML just reflects it
// ============================================================

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
//       ^^^^^^^^^^^^^^^^^     ^^^^^^^^^  ^^^^^^^^^^^  ^^^^^^^^^^
//       Module to import      Container  One field    Built-in rules
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-login',
  imports: [ReactiveFormsModule, CommonModule], // <-- ReactiveFormsModule, NOT FormsModule
  templateUrl: './reactive-login.component.html',
  styleUrl: './reactive-login.component.css'
})
export class ReactiveLoginComponent {

  // Hard-coded credentials for demo purposes
  readonly validUsername = 'inf354';
  readonly validPassword = 'abcde';

  message: string = '';

  // -------------------------------------------------------
  // THE FORM MODEL — built entirely in TypeScript.
  // FormGroup = a group of related fields (your whole form).
  // FormControl = one individual field.
  //   new FormControl('', [Validators.required])
  //                   ^    ^
  //                   |    validators (rules) — can be a list
  //                   initial value
  // -------------------------------------------------------
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // Shortcut getters — lets us write this.username instead of
  // this.loginForm.get('username') every time.
  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }

  // Called on form submit
  login(): void {
    // loginForm.valid is automatically true/false based on all validators
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === this.validUsername && password === this.validPassword) {
        this.message = 'Login successful!';
      } else {
        this.message = 'Login unsuccessful. Try inf354 / abcde';
      }
    }
  }
}
