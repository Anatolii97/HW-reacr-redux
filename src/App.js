import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/contacts-operations';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getIsLoading } from './redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import "./theme/App.css"

export default function App() {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contact-book">
      <ContactForm />
      {isLoading ? (
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      ) : null}
      <ContactsList />
    </div>
  );
}
