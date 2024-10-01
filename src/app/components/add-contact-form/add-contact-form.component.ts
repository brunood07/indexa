import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeparatorComponent } from "../separator/separator.component";
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Router, RouterLink } from '@angular/router';

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
export class AddContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm = () => {
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
    const newContact = this.contactForm.value;
    this.contactService.addContact(newContact);
    this.contactForm.reset();
    this.router.navigateByUrl("");
  }

  cancel = () => {
    this.contactForm.reset();
    this.router.navigateByUrl("");
  }
}
