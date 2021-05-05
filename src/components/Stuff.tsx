import {
    Link
  } from "react-router-dom";

export default function Stuff() {
    return (
        <div>
            <h1  className='linkTitle'><Link to="/phoneNumber"> Phone Guesser </Link></h1>
        </div>
    )
}