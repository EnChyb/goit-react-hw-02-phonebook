import PropTypes from 'prop-types'; 

export const Filter = (filter, onFilterChange) => {

    return (
        <label>Find contacts by name:
            <input
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={onFilterChange}
            />
        </label>
    )
}

Filter.propTypes = {
    filterValue: PropTypes.string,
    onFilterChange: PropTypes.func,
}