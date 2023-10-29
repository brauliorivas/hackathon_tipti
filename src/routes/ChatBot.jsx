import { useEffect, useState } from "react";

function ChatBot() {
    const [response, setResponse] = useState(null);
    

    return (
        <>
            <h1>ChatBot</h1>
            { response && <p>{response}</p> }
        </>
    )

}

export default ChatBot;