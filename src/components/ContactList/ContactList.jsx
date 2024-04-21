import PropTypes from 'prop-types'; 

export const ContactList = ({ contacts, onDeleteClick }) => {

    return (
        <div>
            {contacts.length > 0 ?
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
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
                    <p>Your list is empty. Add your first contact!</p>
                )}
        </div>
    )    
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteClick: PropTypes.func,
}
