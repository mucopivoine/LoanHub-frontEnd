import { useContext } from 'react';
import { MessageContext } from '../messageContext';

function Search() {
  const { messages } = useContext(MessageContext);

  return (
    // ...
    <div className="flex items-center gap-[15px] relative">
      <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
        <FaRegBell />
        <FaEnvelope />
        {messages.length > 0 && (
          <div className="flex items-center">
            <p>{messages.length} new message(s)</p>
            <ul>
              {messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      // ...
    </div>
  );
}