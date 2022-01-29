import React from 'react';
import {RiContactsFill} from 'react-icons/ri'

function Contact({idd,name,family,tell,email}) {
    return (
        <>
        
            <p>
                <a className="aClass" data-bs-toggle="collapse" href={`#${idd}`} role="button" aria-expanded="false" aria-controls={idd}>
                  <RiContactsFill/> <span className='mx-3'>{name+" "+family}</span>
                </a>
            </p>
            
            <div className="collapse mb-3" id={idd}>
                <div className="card card-body">
                    <p><b>Tell : </b><i>{tell}</i></p>
                    <p><b>Email : </b><i>{email}</i></p>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default Contact;
