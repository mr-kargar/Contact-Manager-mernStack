import react, { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import Header from './components/Header';

function App() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        (async () => {
            const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await fetchData.json();
            setUserData(data);
        })();

    }, []);
    return (
        <>
            <Header title="Contact Manager" color="light" />
            <AddContact />
            <Contacts userInfo={userData}/>
            <Footer/>
        </>
    );

};

export default App;