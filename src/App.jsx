import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Herm Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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

  render() {
    console.log("object :>> ", this.state);
    const filteredContacts = this.getVisibleFilter();
    console.log("filteredContacts :>> ", filteredContacts);

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
