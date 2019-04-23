import React from 'react';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


const InfoPage = () => (
    <section className='inputForm'>
    <div className='loginForm'>
     <h2>Select Form</h2>
     <div className="forms">
     <button className="mainButton">
       <Link to="/damageform">
           Damage Notation
        </Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">
           Pre-Purchase
        </Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">
           Diagnostic Summary
        </Link>
      </button>
      {/* <div className='formStatusProgress'>In Progress</div> */}
        <br />
        <button className="mainButton">
       <Link to="/damageform">
           Checkout Checklist
        </Link>
      </button>
     </div>
     </div>
     </section>
);

export default InfoPage;