import {
    Link
  } from "react-router-dom";

export default function Stuff() {
    return (
        <div className="linkBlock">
            <h1 className='linkTitle'><Link style={{ textDecoration: 'none' }} to="/phoneNumber"> Phone Guesser </Link></h1>
            {/*<h1 className='linkTitle'><Link style={{ textDecoration: 'none' }} to="/casino"> Casino </Link></h1>*/}
        </div>
    )
}