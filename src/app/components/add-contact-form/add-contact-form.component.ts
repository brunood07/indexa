import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeparatorComponent } from "../separator/separator.component";
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.fetchContact();
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    newContact.id = id ? parseInt(id) : null;
    this.contactService.editOrSaveContact(newContact).subscribe(() => {
      this.contactForm.reset();
      this.router.navigateByUrl("");
    });
  }

  cancel = () => {
    this.contactForm.reset();
    this.router.navigateByUrl("");
  }

  fetchContact = () => {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.findById(parseInt(id)).subscribe(contact => {
        this.contactForm.patchValue(contact);
      })
    }
  }
}
