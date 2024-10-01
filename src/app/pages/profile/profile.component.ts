import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../components/contact/contact';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ContainerComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  contact: Contact = {
    email: "",
    id: 0,
    nome: "",
    telefone: "",
    aniversario: "",
    observacoes: "",
    redeSocial: ""
  };

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.findById(parseInt(id)).subscribe(contact => {
        this.contact = contact;
      })
    }
  }

  delete = () => {
    this.contactService.deleteById(this.contact.id).subscribe(() => {
      this.router.navigateByUrl("");
    });
  }
}
