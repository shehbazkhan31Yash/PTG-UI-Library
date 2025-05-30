import { useEffect, useState } from 'react';
import { PtgLangChainChatbot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot-langchain/Chatbot';
import { useLocation } from 'react-router-dom';
import './Chatbot.css';
import { environment } from '../../../environments/environment';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
import { ChatGroq } from "@langchain/groq";
import IFrame from '../appbar/IFrame';


export default function LangChainChatbotFullScreen() {
    const [genAIKey, setGenAIKey] = useState<string>(
    environment.LANG_CHAIN_GENAI_KEY
  );
  const location = useLocation();
const AI_PROVIDERS = {
      "google-ai": () => new ChatGoogleGenerativeAI({ model: "gemini-2.0-flash", apiKey: genAIKey }),
      "chat-together-ai": () => new ChatTogetherAI({
   model: "meta-llama/Llama-3-70b-chat-hf",
    apiKey: environment.LANG_CHAIN_CHAT_TOGETHER_KEY,
  }),
  "chat-groq-ai": () => new ChatGroq({
model: "llama-3.1-8b-instant",
apiKey: environment.LANG_CHAIN_CHAT_GROQ_KEY,
  }), 
  "chat-upstage-ai": ()=> {},
  "chat-bedrock-ai": () => {},
  "chat-anthropic": () => {},
  "chat-aistral-ai": () => {},
  "azure-chatOpen-ai": () => {},
  "chat-vertex-ai": () => {},
  "chat-mistral-ai":()=>{}
    };
  useEffect(() => {
    if (location.state) {
      setGenAIKey(location.state);
    }
  }, [location]);



  return   <IFrame>
          <PtgLangChainChatbot Ai_Providers={AI_PROVIDERS} genAIKey={genAIKey} />
        </IFrame>
;
}
