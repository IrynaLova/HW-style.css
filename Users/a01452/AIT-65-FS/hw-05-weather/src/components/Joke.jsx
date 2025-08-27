import React from "react";

const Joke = ({ joke, fetchJoke }) => {
    return (
        <div>
            <button
                onClick={fetchJoke}
                style={{
                    padding: "15px",
                    border: "none",
                    borderRadius: "50%",
                    backgroundColor: "#235d9c",
                    color: "white",
                    fontSize: "22px",
                    cursor: "pointer"
                }}
            >
                😂
            </button>
            {joke && (
                <p
                    style={{
                        marginTop: "15px",
                        fontStyle: "italic",
                        background: "#235d9c",
                        padding: "12px",
                        borderRadius: "10px",
                        maxWidth: "350px",
                        margin: "15px auto 0"
                    }}
                >
                    {joke}
                </p>
            )}
        </div>
    );
};

export default Joke;
