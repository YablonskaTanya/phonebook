import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  createUser = (data) => {
    const id = nanoid();
    const name = data.name;
    const number = data.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex((contact) => name === contact.name) !== -1) {
      alert(`${name} is already added to contacts`);
    } else {
      contactsLists.push({ id, name, number });
    }

    if (!name && !number) {
      alert("all fields must be filled");
    }
    this.setState({ contacts: contactsLists });
  };

  handlerChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id != id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");

    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.getVisibleFilter();

    return (
      <div>
        <h1>Phone book</h1>
        <ContactForm onSubmit={this.createUser} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlerChange} />
        <ContactList
          userData={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
