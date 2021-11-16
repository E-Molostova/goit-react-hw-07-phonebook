import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { fetchContacts } from './redux/phonebook/phonebook-operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { loading } = useSelector(state => state.phonebook);
  console.log(loading);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      {loading && <h1>Loading...</h1>}
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
