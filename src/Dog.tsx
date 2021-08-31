import { useState } from "react"

interface dogType {
    message: string,
    status: string
}

export default function Dog(): JSX.Element {
    const [dog, setDog] = useState<dogType>();

    const handleClick = async () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((res: dogType) => setDog(res));
    };

    // const handleClick = async () => {
    //     const response = await fetch("https://dog.ceo/api/breeds/image/random");
    //     const jsonBody: dogType = await response.json();
    //     setDog(jsonBody);
    // };

    return <>
        <h1>Dog app</h1>
        {dog ? 
        <div>
            <img src={dog.message} alt="dog"/>
        </div> : 
        <h2>Click below to create a dog</h2>}
        <button onClick={handleClick}>Get a new dog</button>
    </>
}