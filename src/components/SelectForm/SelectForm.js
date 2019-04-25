import React from 'react';
import { Link } from 'react-router-dom';


const InfoPage = () => (
    <section className='inputForm'>
    <div className='loginForm'>
     <h2>Select Form</h2>
     <div className="forms">
      <button className="mainButton">
       <Link to="/damageform">Damage Notation</Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">Pre-Purchase</Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">Diagnostic Summary</Link>
      </button>
      {/* <div className='formStatusProgress'>In Progress</div> */}
        <br />
      <button className="mainButton">
        <Link to="/damageform">Checkout Checklist</Link>
      </button>
        <br />
        <br />
        <br />
     </div>
     </div>
    </section>
);

export default InfoPage;