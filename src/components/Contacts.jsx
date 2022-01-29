import React from 'react';
import Contact from './Contact';
import Search from './Search';

function Contacts() {
  return (
      <div className='container bg-light p-3 contactsClass shadow-sm border border-light'>
          <h4 className='text-info text-center'>List of contacts</h4>
          <Search/>
          <hr className='text-info'/>
          <Contact idd="amin09171111111" name="amin" family="kargar" tell="09171111111" email="Amin@gmail.com"/>
          <Contact idd="amir09172222222" name="amir" family="kargar" tell="09172222222" email="Amir@gmail.com"/>
          <Contact idd="amir09173333333" name="amir" family="azarbashi" tell="09173333333" email="Azarbashi@gmail.com"/>
      </div>
  );
}

export default Contacts;
