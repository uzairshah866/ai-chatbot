import type { Message } from './chatbot';

type Props = {
   messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
   return (
      <>
         {messages.map((msg) => (
            <div
               key={msg.id}
               className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === 'user'
                     ? 'ml-auto bg-blue-500 text-white'
                     : 'mr-auto bg-gray-200 text-gray-900'
               }`}
            >
               {msg.content}
            </div>
         ))}
      </>
   );
};

export default ChatMessages;
