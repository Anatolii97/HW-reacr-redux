import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import propTypes from 'prop-types';
import './ContactsList.css';
import { Grid, Header } from 'semantic-ui-react';
import Filter from '../FilterName/FilterName';

export default function ContactsList() {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
    <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header className="header" as='h2' dividing>
                Contact List
            </Header>
            <hr/>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <Filter />

    <table className="table_col">
      <tr>
        <th><h3>Name</h3></th>
        <th><h3>Phone number</h3></th>
        <th><h3>Location</h3></th>
      </tr>
        {filterContacts.map(({ id, name, phone, location }) => (
          <tr key={id}>
            <th>{name}</th>
            <th>{phone}</th>
            <th>{location}</th>
            <button className="floating-button" type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </tr>
        ))}
    </table>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};
