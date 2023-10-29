import { useState } from "react";
import generateText from "../util/api/chat";

function ChatBot() {
    const [response, setResponse] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    async function getResponse(prompt) {
        const res = await generateText(prompt);
        setChatResponse(res);
    }
    
    return (
        <>
            <h1>ChatBot</h1>
            <input type="text" value={response} onChange={e => setResponse(e.target.value)} />
            <button onClick={() => getResponse(response)}>
                Ask to ChatBot
            </button>
            {chatResponse && <p>{chatResponse}</p>}
        </>
    )

}

export default ChatBot;