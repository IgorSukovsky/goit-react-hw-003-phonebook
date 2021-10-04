import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./components/ContactForm//ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactList/ContactList";

class Contacts extends Component {
  state = {
    items: [],
    filter: "",
  };

  // -------localStorege
  componentDidMount() {
    console.log("[componentDidMount]");
    const items = localStorage.getItem("items");
    if (items) {
      const parsedItems = JSON.parse(items);
      this.setState({ items: parsedItems });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[componentDidUpdate]");
    if (prevState.items !== this.state.items) {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }
  // -------localStorege the end

  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some(
      (item) => item.name.toLowerCase() === term.name.toLowerCase()
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newTodo = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };

    this.setState((prevState) => {
      const newItems = [newTodo, ...prevState.items];
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;
    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <div>
          <Filter filter={filter} handleChange={this.handleChange} />
          <ContactsList
            items={filteredItems}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default Contacts;
