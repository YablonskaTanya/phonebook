import { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = { name: " ", number: " " };

  handlerChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const nameInput = form.elements.name.value;
    const numberInput = form.elements.number.value;
    console.log(nameInput, numberInput);

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: " ",
      number: " ",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handlerChange}
              required
            />
          </label>
          <label>
            Number{" "}
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handlerChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.any,
};
