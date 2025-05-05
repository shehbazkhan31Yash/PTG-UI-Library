import { useEffect, useState } from 'react';
import { PtgChatBot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot/Chat';
import { useLocation } from 'react-router-dom';
import './Chat.css';

export default function ChatbotFullScreen() {
  const [genAIKey, setGenAIKey] = useState(
    JSON.parse(localStorage?.getItem('state') || '{}')
  );
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setGenAIKey(location.state);
    }
  }, [location]);

  useEffect(() => {
    console.log('Passed state:', genAIKey);
  }, [genAIKey]);

  return <PtgChatBot genAIKey={genAIKey} />;
}
