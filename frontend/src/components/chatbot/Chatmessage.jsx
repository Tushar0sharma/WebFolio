import React from 'react';
import robot from './../../assets/robot.png';

const Chatmessage = ({ chat }) => {
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}message`}>
      {chat.role === 'model' && <img src={robot} alt='' />}
      <p className='messagetext' dangerouslySetInnerHTML={{ __html:  chat.text.replace(/\n/g, '<br>') }}></p>
    </div>
  );
};

export default Chatmessage;
