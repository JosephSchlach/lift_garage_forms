import React from 'react';
import { Link } from 'react-router-dom';


const InfoPage = () => (
    <section className='inputForm'>
    <div className='loginForm'>
     <h2>SELECT FORM</h2>
     <div className="forms">
      <button className="mainButton">
       <Link to="/damageform">DAMAGE NOTATION</Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">PRE-PURCHASE</Link>
      </button>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <button className="mainButton">
       <Link to="/damageform">DIAGNOSTIC SUMMARY</Link>
      </button>
      {/* <div className='formStatusProgress'>In Progress</div> */}
        <br />
      <button className="mainButton">
        <Link to="/checkout">CHECKOUT CHECKLIST</Link>
      </button>
        <br />
        <br />
        <br />
     </div>
     </div>
    </section>
);

export default InfoPage;