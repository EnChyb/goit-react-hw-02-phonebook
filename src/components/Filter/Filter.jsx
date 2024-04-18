import PropTypes from 'prop-types'; 

export const Filter = (filter, onFilterChange) => {

    return (
        <label>Find contacts by name:
            <input
                value={filter}
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={onFilterChange}
            />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
}