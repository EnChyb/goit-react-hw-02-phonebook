import PropTypes from 'prop-types'; 



export const ContactForm = ({ userData, onChange,  submit }) => {
    
    //const newContact = { id: nanoid(), name: userData.name, number: userData.number };

    return (
        <form onSubmit={submit}>
            <label>Name:
                <input
                    value={userData.name}
                    type="text"
                    name="name"
                    onChange={onChange}
                    pattern="^^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>Number:
                <input
                    value={userData.number}
                    type="tel"
                    name="number"
                    onChange={onChange}
                    pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button>Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    userData: PropTypes.object,
    submit: PropTypes.func,
    onChange: PropTypes.func,
}