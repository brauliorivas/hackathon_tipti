import { useEffect, useState } from "react";
import promptQuery from "../util/api/langchain/client";

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