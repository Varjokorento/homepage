import { useState, useEffect } from "react";

export default function PhoneGuesser() {
    const [prefix, setPrefix] = useState('000')
    const [phone, setPhone] = useState(['0', '0', '0', '0', '0', , '0']);
    const [attempts, setAttempts] = useState(0)
    const [correctNumbers, setCorrects] = useState<number[]>([])
    const [prefixCorrect, setPrefixCorrect] = useState(false)

    const prefixes = ["050", "0457", "04"]
    
    useEffect(() => {
        const prefix = getPrefix()
        setPhoneAgain()
        setPrefix(prefix)
      }, []);

    const setPhoneAgain = () => {
        let number = phone;
        for (let a= 0; a < 8; a++) {
            if (!correctNumbers.includes(a)) {
                number[a] = getRndInteger(0,10).toString()
            }
        }
        setPhone(number)
        if (!prefixCorrect) {
            setPrefix(getPrefix())
        }
        setAttempts(attempts + 1)
    }

    const getPrefix = () => {
        const index: number = getRndInteger(0,3)
        const prefix = prefixes[index]
        if (prefix.length == 2) {
            return prefix + getRndInteger(0,10).toString()
        } else {
            return prefix
        }
    }

    function getRndInteger(min:number, max:number): number {
        let num = Math.floor(Math.random() * (max - min) ) + min;
        return num;
      }
    const handlePrefix = () => {
        setPrefixCorrect(true)
    }
    const saveCorrect = (index: number) => {
        let corrSoFar: number[] = correctNumbers;
        corrSoFar.push(index)
        console.log(corrSoFar)
        setCorrects(corrSoFar)
    }

    return(
        <div className='center'>
        <h1 className='smallTitle'>PhoneGuesser</h1>
        <p>This amazing, <span className="boldText">ALGORITHM POWERED</span>, script guesses your phone number! 'Works' only for Finnish numbers</p>
        <p className = 'boldText'><span onClick={handlePrefix}>{prefix} </span> {phone.map((x, index) => {
            return <span onClick={() => saveCorrect(index)}>{x}</span>
        })}</p>
        <p className="tryAgain" onClick={setPhoneAgain}>Incorrect? Try again!</p>
        <p>Attemps: <div className="boldText">{attempts} </div></p>
        </div>
    )
}