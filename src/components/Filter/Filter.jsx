import PropTypes from 'prop-types'; 

export const Filter = ({ filter, setFilter }) =>{
    // const setFilterValue = (e) => {
//     const value = e.target.value;
//     //setFilter(value);
//     console.log(value);
//   }

    return (
        <label>Find contacts by name:
            <input
                value={filter}
                type='text'
                name="filter"
                placeholder='Search contact...'
                onChange={e => setFilter(e.target.value)}
            />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}