import type {JSX} from "react";

interface GreetingProps {
    firstName: string,
    age?: number
}

function Greeting({firstName, age}: GreetingProps): JSX.Element {
    const firstNameMod = firstName + "Smith"
    return (
        <div>
            <h1>Hello, {firstNameMod} !!!</h1>
            <p>Age: {age}</p>
        </div>
    );
}

export default Greeting;