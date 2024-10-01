import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AddContactHeaderComponent } from '../../components/add-contact-header/add-contact-header.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { ContainerComponent } from "../../components/container/container.component";
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
    NewContactComponent,
    AddContactHeaderComponent,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = [];
  filterByText: string = "";

  constructor(private contactService: ContactService) { }

  private removeAccents(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  filterContactsByInitialLetter = (letter: string): Contact[] => {
    return this.filterContactsByText().filter(contact => {
      return this.removeAccents(contact.nome).toLowerCase().startsWith(this.removeAccents(letter).toLowerCase());
    })
  }

  filterContactsByText = (): Contact[] => {
    if (!this.filterByText) {
      return this.contacts;
    }
    return this.contacts.filter(contact => {
      return this.removeAccents(contact.nome).toLowerCase().includes(this.removeAccents(this.filterByText).toLowerCase());
    })
  }
}
