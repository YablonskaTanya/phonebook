import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
