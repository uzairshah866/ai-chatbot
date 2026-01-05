import { useRef, useState } from 'react';
import ChatMessages from './chatMessages';
import ChatInput from './chatInput';
import TypingIndicator from './typingIndicator';

export type ChatResponse = {
   message: string;
};

export type Message = {
   id: string;
   content: string;
   role: 'user' | 'bot';
};

const ChatBot = () => {
   const conversationId = useRef<string>(crypto.randomUUID());

   const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const sendMessage = async (prompt: string) => {
      setError(null);

      const userMessage: Message = {
         id: crypto.randomUUID(),
         content: prompt,
         role: 'user',
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsBotTyping(true);

      try {
         const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               prompt,
               conversationId: conversationId.current,
            }),
         });

         if (!res.ok) {
            throw new Error('Failed to fetch response');
         }

         const data: ChatResponse = await res.json();

         const botMessage: Message = {
            id: crypto.randomUUID(),
            content: data.message,
            role: 'bot',
         };

         setMessages((prev) => [...prev, botMessage]);
      } catch (err) {
         setError(`Something went wrong. Please try again. ${err}`);
      } finally {
         setIsBotTyping(false);
      }
   };

   return (
      <div className="flex flex-col h-full">
         <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto p-4">
            <ChatMessages messages={messages} />

            {isBotTyping && <TypingIndicator />}
            {error && <p className="text-red-500 text-sm">{error}</p>}
         </div>

         <ChatInput onSend={sendMessage} disabled={isBotTyping} />
      </div>
   );
};

export default ChatBot;
