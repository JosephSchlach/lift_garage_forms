import React from 'react';
import { Link } from 'react-router-dom';


const InfoPage = () => (
    <section className='inputForm'>
    <div className='loginForm'>
     <h2>SELECT FORM</h2>
     <div className="forms">
      <Link to="/damageform">
        <button className="mainButton">
          DAMAGE NOTATION
        </button>
      </Link>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <Link to="/damageform">
        <button className="mainButton">
          PRE-PURCHASE
        </button>
      </Link>
      {/* <div className='formStatusComplete'>Complete</div> */}
        <br />
      <Link to="/damageform">
        <button className="mainButton">
          DIAGNOSTIC SUMMARY
        </button>
      </Link>
      {/* <div className='formStatusProgress'>In Progress</div> */}
        <br />
      <Link to="/checkout">
        <button className="mainButton">
          CHECKOUT CHECKLIST
        </button>
      </Link>
        <br />
        <br />
        <br />
     </div>
     </div>
    </section>
);

export default InfoPage;