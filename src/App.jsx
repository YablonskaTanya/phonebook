import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    this.setState((prevState) => prevState.contacts.push(newUser));
  };

  handlerChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.createUser} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlerChange} />
        <ContactList userData={this.state.contacts} />
      </div>
    );
  }
}

export default App;
