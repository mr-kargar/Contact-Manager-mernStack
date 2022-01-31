import React from 'react';
import { RiContactsFill } from 'react-icons/ri'

function Contact({ userDetail }) {
    return (
        <>

            <p>
                <a className="aClass d-flex align-items-center" data-bs-toggle="collapse" href={`#${'a' + userDetail.id}`} role="button" aria-expanded="false" aria-controls={'a' + userDetail.id}>
                    <RiContactsFill /> <span className='mx-3'>{userDetail.name}</span>
                </a>
            </p>

            <div className="collapse mb-3" id={'a' + userDetail.id}>
                <div className='d-flex'>
                    <div className="card card-body mx-3">
                        <p><b>Tell : </b><i>{userDetail.phone}</i></p>
                        <p><b>Email : </b><i>{userDetail.email}</i></p>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-outline-primary mx-3 my-2'>Edit</button>
                        <button className='btn btn-outline-danger mx-3'>Delete</button>
                    </div>
                </div>

            </div>
            <hr />
        </>
    );
}

export default Contact;
