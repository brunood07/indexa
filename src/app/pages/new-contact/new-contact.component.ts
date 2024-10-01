import { Component } from '@angular/core';
import { AddContactHeaderComponent } from "../../components/add-contact-header/add-contact-header.component";
import { ContainerComponent } from "../../components/container/container.component";
import { AddContactFormComponent } from "../../components/add-contact-form/add-contact-form.component";

@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [
    AddContactHeaderComponent,
    ContainerComponent,
    AddContactFormComponent
  ],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {

}
