import { ContactsComponent } from './components/contacts/contacts.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/add.contact/add.contact.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'contatos', component: ContactsComponent},
  { path: 'adicionar', component: AddContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
