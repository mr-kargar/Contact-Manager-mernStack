import React from 'react';
import Contact from './Contact';
import Search from './Search';

function Contacts({userInfo}) {
  return (
      <div className='container bg-light p-3  shadow-lg border rounded '>
          <h4 className='text-info text-center'>List of contacts<span className="badge bg-info text-dark mx-3">Total : {userInfo.length}</span></h4>
          <Search/>
          <hr className='text-info'/>
      <div className='contactsClass'>
          {userInfo.map(user =>{
              return <Contact key={user.id} userDetail={user}/>
          })}
          </div>
      </div>
  );
}

export default Contacts;
