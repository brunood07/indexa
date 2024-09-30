import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from "./components/contact/contact.component";
import agenda from './agenda.json';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda || [];

  filterByText: string = "";

  private removeAccents(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => {
      return this.removeAccents(contact.nome).toLowerCase().startsWith(this.removeAccents(letter).toLowerCase());
    })
  }

  filterContactsByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }
    return this.contacts.filter(contact => {
      return this.removeAccents(contact.nome).toLowerCase().includes(this.removeAccents(this.filterByText).toLowerCase());
    })
  }
}
