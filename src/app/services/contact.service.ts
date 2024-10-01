import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [];
  constructor() {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = localStorageContacts ? JSON.parse(localStorageContacts) : [];
    this.contacts = parsedContacts || [];

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts = (): Contact[] => {
    return this.contacts;
  }
  addContact = (contact: Contact) => {

    const newContact = {
      ...contact,
    }
    this.contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
function randomInt(arg0: number) {
  throw new Error('Function not implemented.');
}

