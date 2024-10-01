import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeparatorComponent } from "../separator/separator.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [
    SeparatorComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.css'
})
export class AddContactFormComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      telefone: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      aniversario: new FormControl(""),
      redesSociais: new FormControl(""),
      observacoes: new FormControl(""),
    });
  }

  submitContact = () => {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
    }
  }

  cancel = () => {

  }
}
