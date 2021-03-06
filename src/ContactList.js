import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <ul ClassName="contact-list">
        {this.props.contacts.map(contact => {
          return (
            <Contact
              key={contact._id}
              name={contact.name}
              avatar={contact.avatar}
              occupation={contact.occupation}
            />
          )
        })}
      </ul>
    );
  }
}

export default ContactList;
