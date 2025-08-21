import React from "react";

function Counter() {
    const[count, setCount] = React.useState(0);


    return (
        <div>
            <h3>Counter:{count}</h3>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}
export default Counter;