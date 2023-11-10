import { Component } from "react"
import { ContactForm } from "./ContactForm"
import { nanoid } from "nanoid"
import { ContactList } from "./ContactList"

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    name: '',
    number: ''
  }


  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid()
    };

    this.setState(prevState => {
      return{
        contacts: [...prevState.contacts, contact],
      }
    })
  }

  render(){
    const {contacts} = this.state;


    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact}/>
        <h2>Contacts</h2>
        {contacts.length>0 && <ContactList items={contacts}/>}
      </div>
    )
  }
}