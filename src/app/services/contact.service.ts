import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly API = 'http://localhost:3000/contacts'

  constructor(private httpClient: HttpClient) { }

  getContacts = (): Observable<Contact[]> => {
    const contacts = this.httpClient.get<Contact[]>(this.API);
    return contacts;
  }

  addContact = (contact: Contact) => {
    return this.httpClient.post<Contact>(this.API, contact);
  }

  findById = (id: number): Observable<Contact> => {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Contact>(url);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.API}/${contact.id}`
    return this.httpClient.put<Contact>(url, contact)
  }

  editOrSaveContact(contact: Contact): Observable<Contact> {
    if (contact.id) {
      return this.updateContact(contact)
    } else {
      return this.addContact(contact)
    }
  }

  deleteById = (id: number) => {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Contact>(url);
  }
}
