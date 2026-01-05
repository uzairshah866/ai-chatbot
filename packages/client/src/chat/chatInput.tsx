import { useState, type KeyboardEvent, type FormEvent } from 'react';

type Props = {
   onSend: (message: string) => void;
   disabled?: boolean;
};

const ChatInput = ({ onSend, disabled }: Props) => {
   const [value, setValue] = useState('');

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!value.trim() || disabled) return;

      onSend(value.trim());
      setValue('');
   };

   const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(e);
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-col gap-2 border-2 p-2 rounded-2xl"
      >
         <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={2}
            placeholder="Type a message..."
            className="resize-none outline-none"
         />

         <button
            type="submit"
            disabled={disabled || !value.trim()}
            className="self-end bg-blue-500 text-white px-4 py-1 rounded-xl disabled:opacity-50"
         >
            Send
         </button>
      </form>
   );
};

export default ChatInput;
