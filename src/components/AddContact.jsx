import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai'

function AddContact() {
    return (
        <div className="container bg-light mb-3  py-3 shadow-lg classAddContact border rounded">
            <div className="d-flex  align-items-center mb-3">
                <input type="name" className="form-control mx-2" placeholder="Enter name" id="name" />
                <input type="phone" className="form-control mx-2" placeholder="Enter phone" id="family" />
                <input type="email" className="form-control mx-2" placeholder="Enter email" id="email" />
            </div>
            <button className="btn btn-info d-flex align-items-center mx-auto  "> <AiOutlineUserAdd className='mx-3'/><span className="mx-3">Add Contact</span></button>

        </div>
    );
}

export default AddContact;
