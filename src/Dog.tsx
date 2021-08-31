import { useState } from "react"

interface Dog {
    message: string,
    status: string
}

export default function Dog(): JSX.Element {
    const [dog, setDog] = useState<Dog>();

    const handleClick = async () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((res) => setDog(res));
    }

    return <>
        {dog && <p>There's a dog here</p>}
        <button onClick={handleClick}>dog</button>
    </>
}