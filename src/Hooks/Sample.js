import { useState } from "react"

const Sample = () => {
    const [name, setName] = useState('Narendra');
    let input = ''

    const changeNameHandler = () => {
        setName(input);
    }
    const inputValue = (e) => {
        input = e.target.value;
        console.log(input)
    }
    return <>
        <p>Hello {name}</p>
        <input type="text" onChange={inputValue} />
        <button onClick={changeNameHandler}>Change Name</button>
    </>
}

export default Sample;