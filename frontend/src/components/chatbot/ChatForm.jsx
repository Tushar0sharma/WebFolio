import React, { useRef } from 'react';

function ChatForm({ chathistory, setchathistory ,generateresponse }) {  // Fix prop destructuring
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        inputRef.current.value = "";  
        setchathistory(prevHistory => [...prevHistory, { role: "user", text: userMessage }]);
        setTimeout(()=>{setchathistory(prevHistory => [...prevHistory, { role: "model", text: "Thinking..." }]);
        generateresponse([...chathistory,{role:"user",text:userMessage}]);
        },200)        
    };

    return (
        <form className='chatform' onSubmit={handleSubmit}>
            <input 
                type='text' 
                ref={inputRef} 
                placeholder='Type a message...' 
                className='messageinput' 
                required 
            />
            <button className='but' type="submit">
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </form>
    );
}

export default ChatForm;
