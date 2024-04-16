import PropTypes from 'prop-types'; 

export const Filter = (filter, onChange) => {

    return (
        <label>Find contacts by name:
            <input
                value={filter}
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={onChange}
            />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}