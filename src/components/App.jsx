import { useState } from "react";
import css from './App.module.css'
///

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {

  //State
  const [userData, setUserData] = useState([
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},   
  ]);
  const [filter, setFilter] = useState('');
  console.log(filter);

  const addContact = newContact => {
    setUserData(prevContacts => [...prevContacts, newContact]);
    };

  //Take a  contact from userData, make a new Array without contact with contact with ID to delete, update new array
  const deleteContact = (id) => {
    const newArray = userData.filter(contact => contact.id !== id);
    setUserData(newArray);
  }

  // Find using filter
  const filteredUserData = userData.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



  return (
    <div>
      <h1 className={css.component}>Phonebook</h1>
      <ContactForm userData={userData} addContact={addContact} />
      <h2 className={css.component}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredUserData} onDeleteClick={deleteContact}/>
    </div>
  )
};