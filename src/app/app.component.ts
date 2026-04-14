// ============================================================
// ROOT COMPONENT
// This component's only job now is to display both login forms
// side by side so you can compare them.
// ============================================================

import { Component } from '@angular/core';
import { TemplateLoginComponent } from './template-login/template-login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

@Component({
  selector: 'app-root',
  imports: [TemplateLoginComponent,  // the FormsModule / template-driven form 
  ReactiveLoginComponent   // the ReactiveFormsModule / reactive form
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Nothing needed here — each form component handles its own logic.
}
