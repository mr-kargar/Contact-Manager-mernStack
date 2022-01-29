import react from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

import Header from './components/Header';

function App() {
    return ( 
        <>
        <Header title="Contact Manager" color="light"/>
        <AddContact/>
        <Contacts/>
        </>
    );

};

export default App;