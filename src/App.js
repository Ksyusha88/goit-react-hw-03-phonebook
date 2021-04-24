import { Component } from 'react';
import Form from './Components/Form/';
import shortid from 'shortid';
import ContactList from './Components/ContactList';
import ContactFilter from './Components/ContactFilter';
import Container from './Components/Container';

class App extends Component{
  state = {
    contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

formSubmitHandler = data => {
  const newData = data;
  return newData;
};

addContact = data => {
  const newContact = data;
  if (this.state.contacts.some(name => name.name === newContact.name))
  return alert (`${newContact.name} is already in contacts.`)
  newContact.id = shortid.generate();
    return this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

deleteContact =(contactId) =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId )
  }));
};

filrerContact = e => {
  this.setState({ filter: e.currentTarget.value })
}

getVisibleContacts =() => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter),
    );
}; 

componentDidMount(){
  console.log('App componentDidMount'); 
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts){
    this.setState({contacts: parsedContacts});
  }
}


componentDidUpdate(prevProps, prevState){

  if (this.state.contacts !== prevState.contacts){
    console.log('Обновился список контактов')
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}



render (){

const {filter} = this.state;
const visibleContacts = this.getVisibleContacts();

  return(
    <Container>
      <h1>Phonebook</h1> 
      <Form onAddContact = {this.addContact}
     />
     <ContactFilter value ={filter} onChange = {this.filrerContact}/>
      <ContactList contacts = {visibleContacts} onDeleteContact ={this.deleteContact}
      />
      </Container>
    );
  }
};

export default App;
