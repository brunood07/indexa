import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { AddContactFormComponent } from "../add-contact-form/add-contact-form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact-header',
  standalone: true,
  imports: [ContainerComponent, AddContactFormComponent, RouterLink],
  templateUrl: './add-contact-header.component.html',
  styleUrl: './add-contact-header.component.css'
})
export class AddContactHeaderComponent {

}
