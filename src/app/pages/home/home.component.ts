import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddContactHeaderComponent } from '../../components/add-contact-header/add-contact-header.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { NewContactComponent } from '../new-contact/new-contact.component';
import agenda from '../../agenda.json';
import { ContainerComponent } from "../../components/container/container.component";
import { RouterLink } from '@angular/router';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

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
export class HomeComponent {
  alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda || [];

  filterByText: string = "";

  private removeAccents(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
