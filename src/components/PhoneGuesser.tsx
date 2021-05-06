import { useState } from "react";

export default function PhoneGuesser() {
    const [prefix, setPrefix] = useState('000')
    const [phone, setPhone] = useState('0000000');
    const [attempts, setAttempts] = useState(0)

    const prefixes = ["050", "0457", "04"]
    

    const setPhoneAgain = () => {
        let number = "";
        for (let a= 0; a < 8; a++) {
            number = number + getRndInteger(0,9)
        }
        setPhone(number)
        setPrefix(getPrefix())
        setAttempts(attempts + 1)
    }

    const getPrefix = () => {
        const index: number = getRndInteger(0,2)
        return prefixes[index]
    }

    function getRndInteger(min:number, max:number): number {
        let num = Math.floor(Math.random() * (max - min) ) + min;
        return num;
      }

    return(
        <div className='center'>
        <h1 className='smallTitle'>PhoneGuesser</h1>
        <p>This amazing, AI POWERED, script guesses your phone number! 'Works' only for Finnish numbers</p>
        <p className = 'boldText'>{prefix} {phone}</p>
        <p className="tryAgain" onClick={setPhoneAgain}>Incorrect? Try again!</p>
        <p>Attemps: <div className="boldText">{attempts} </div></p>
        </div>
    )
}