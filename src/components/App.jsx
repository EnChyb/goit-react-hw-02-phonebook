import { useState } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {

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

  // //State
  // const [userData, setUserData] = useState([
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},   
  // ]);

  // // console.log(userData);
  // // console.log(setUserData);

  // const [filter, setFilter] = useState('');

  // const onChange = event => {
  //   setUserData({ ...userData, [event.target.name]: event.target.value });
  // };

  // //add new contact after submit
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   //const { name, number } = userData;
  //   console.log(userData);
  //   //console.log(name);
  //   const newContact = { id: nanoid(), name: userData.name, number: userData.number };

  //   setUserData((userData) => [...userData, [e.target.name]: e.target.value]);
    
  // }
  // //Take a  contact from userData, make a new Array without contact with contact with ID to delete, update new array
  // const deleteContact = (id) => {
  //   const newArray = userData.filter(contact => contact.id !== id);
  //   setUserData(newArray);
  // }

  // //Find using filter
  // // const filteredUserData = userData.filter(contact =>
  // //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // // );

  // const setFilterValue = (e) => {
  //   const value = e.target.value;
  //   setFilter(value);
  //   console.log(value);
  // }
  
  const [userData, setUserData] = useState(INITIAL_STATE);

  const onChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    const { name, number, contacts } = userData;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    setUserData({
      ...userData,
      contacts: [...contacts, { name, number, id: nanoid() }],
      name: '',
      number: '',
    });
  };

  const deleteContact = id => {
    setUserData({
      ...userData,
      contacts: userData.contacts.filter(contact => contact.id !== id),
    });
  };

  const filterValue = e => {
    const value = e.target.value;
    setUserData({ ...userData, value });
    console.log(value)
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm userData={userData} onChange={onChange} submit={onSubmit} />
      <h2>Contacts</h2>
      <Filter filter={userData.filter} onFilterChange={filterValue} />
      <ContactList contacts={userData.contacts} filter={userData.filter} onDeleteClick={deleteContact}/>
    </div>
  )
};
