import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai'

function AddContact() {
    return (
        <div className="container bg-light mb-3 text-center pt-3 shadow-sm classAddContact">
            <div className="d-flex  align-items-center mb-3">
                <input type="name" className="form-control mx-2" placeholder="Enter name" id="name" />
                <input type="name" className="form-control mx-2" placeholder="Enter family" id="family" />
                <input type="email" className="form-control mx-2" placeholder="Enter email" id="email" />
            </div>
            <button className="btn btn-info mb-2 "> <AiOutlineUserAdd className='mx-3'/><span className="mx-3">Add Contact</span></button>

        </div>
    );
}

export default AddContact;
