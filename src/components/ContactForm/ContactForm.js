import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import './ContactForm.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';
import { Grid, Header } from 'semantic-ui-react';
import { toast } from 'react-toastify';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(phone)) {
      return toast.info(`${phone} is already exist`);
    } else {
      dispatch(addContact(name, phone, location));
    }

    setName('');
    setPhone('');
    setLocation('');
  };

  return (
    <>
       <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header className="header" as='h1' dividing>
                Contact Book
            </Header>
            <hr/>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      <form onSubmit={handleSubmit}>
        <div className="group">
        <input
          className="contact-input"
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />
         <span className="bar"></span>
         <label htmlFor="name">
          Name
        </label>
         </div>
         <div className="group">
        <input
          className="contact-input"
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          required
          onChange={e => setPhone(e.target.value)}
        />
         <span className="bar"></span>
         <label className="label-form" htmlFor="phone">
          Phone
        </label>
        </div>
        <div className="group">
        <input
          className="contact-input"
          type="text"
          name="location"
          id="location"
          value={location}
          required
          onChange={e => setLocation(e.target.value)}
        />
         <span className="bar"></span>
         <label className="label-form" htmlFor="location">
         Location
        </label>
         </div>
        <button className="btn-add" type="submit" disabled={!(name && phone && location)}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};