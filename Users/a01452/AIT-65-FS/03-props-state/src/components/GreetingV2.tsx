import type {JSX} from "react";

interface GreetingProps {
    firstName: string,
    age: number
}

function Greeting(props: GreetingProps): JSX.Element {
    // props = {firstName:"Tony", age: 21}; // Wrong away
    props.firstName = props.firstName + " Smith"
    return (
        <div>
            <h1>Hello, {props.firstName} !!!</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Greeting;