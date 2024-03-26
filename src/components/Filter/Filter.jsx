import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
