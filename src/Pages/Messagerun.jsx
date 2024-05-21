import { useState } from 'react';
import Search from './Search';
import Contacts from './Contacts';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <Search messages={messages} />
      <Contacts onNewMessage={handleNewMessage} />
    </div>
  );
};

export default App;
