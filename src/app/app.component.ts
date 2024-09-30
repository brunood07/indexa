import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda || [];

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.contacts.filter(contact => contact.nome.toLowerCase().startsWith(letter))
  }
}
