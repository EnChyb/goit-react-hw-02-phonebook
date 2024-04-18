import PropTypes from 'prop-types'; 

export const ContactList = ({ contacts, filter, onDeleteClick }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

    return (
        <div>
            {filteredContacts.length > 0 ? (
                    <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td><button onClick={() => onDeleteClick(contact.id)}>Delete</button></td>
                </tr>                        
                ))
                }                    
            </tbody>
        </table>
            ) : (
        <p>No contacts</p>                   
            )}

    </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    onDeleteClick: PropTypes.func,
}