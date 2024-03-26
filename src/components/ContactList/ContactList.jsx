import PropTypes from "prop-types";

const ContactList = ({ userData, onDeleteContact }) => {
  console.log(userData);

  return (
    <ul>
      {userData.map((user) => (
        <li key={user.id}>
          <p>
            {user.name} : {user.number}
          </p>

          <button onClick={() => onDeleteContact(user.id)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  userData: PropTypes.any,
  onDeleteContact: PropTypes.func,
};
