import { useState } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


const INITIAL_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
}

export const App = () => {

  const [userData, setUserData] = useState(INITIAL_STATE);
  
  const onChange = (e) => {
    const { name, value } = e.target;
   
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { contacts, name, number } = userData;

    setUserData({
      ...userData,
      contacts: [...contacts, { id: nanoid(), name, number }],

    }
    );
    console.log(setUserData);
  }
//Take a  contact from userData, make a new Array without contact with contact with ID to delete, update new array
  const deleteContact = (id) => {
    const { contacts } = userData;
    const newArray = contacts.filter(contact => contact.id !== id);
    setUserData(newArray);


  }

  //Find using filter

  const [filter, setFilter] = useState(INITIAL_STATE.filter)

  const onFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);



  }


  return (
    <div>
        <h1>Phonebook</h1>
      <ContactForm userData={userData} onChange={onChange} submit={onSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <ContactList contacts={userData.contacts} onDeleteClick={deleteContact}/>
    </div>
  )
};
