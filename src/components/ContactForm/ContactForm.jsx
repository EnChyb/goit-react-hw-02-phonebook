import PropTypes from 'prop-types'; 
import { nanoid } from 'nanoid';
import { useState } from 'react';


export const ContactForm = ({ userData, addContact }) => {

    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('');

    //add new contact after submit
    const onSubmit = (e) => {
        e.preventDefault();

        // Do not add duplicated contact
        const duplicatedContact = userData.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
        );

        if (duplicatedContact) {
        alert(`${nameValue} is already in contacts.`);
        return;
        }

        //Add new contact 
        const newContact = { id: nanoid(), name: nameValue, number: numberValue };
        addContact(newContact);

        document.getElementById("nameId").value = '';
        document.getElementById("numberId").value = '';
 
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                    id='nameId'
                    value={userData.name}
                    type="text"
                    name="name"
                    onChange={e => setNameValue(e.target.value)} // Przekazanie funkcji obsługującej zmiany w inputach
                    /*pattern="^^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"*/
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>Number:
                <input
                    id='numberId'
                    value={userData.number}
                    type="tel"
                    name="number"
                    onChange={e => setNumberValue(e.target.value)} // Przekazanie funkcji obsługującej zmiany w inputach
                    /*pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"*/
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button>Add contact</button>
        </form>
    )
}

    ContactForm.propTypes = {
        userData: PropTypes.array,
        addContact: PropTypes.func,
    };