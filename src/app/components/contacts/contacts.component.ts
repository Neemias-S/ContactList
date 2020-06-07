import { HomeServiceService } from '../../service/home-service.service';
import { Contact } from '../../model/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private service : HomeServiceService) { }
  contacts : Array<Contact> ;
  searchText;
  ngOnInit() {

    this.loadUsers();

  }

  loadUsers(){
    this.service.findAll().subscribe( res=> this.contacts = res );
  }
  
  filterUsers(){
    if(this.searchText.length == 0){
      return this.loadUsers()
    }

    this.contacts  = this.contacts.filter(contact => contact.name.first.includes(this.searchText))
  }

}
