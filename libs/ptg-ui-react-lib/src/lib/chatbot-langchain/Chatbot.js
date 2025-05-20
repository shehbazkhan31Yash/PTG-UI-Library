import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Chatbot.css";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { FaPaperclip, FaTrash, FaClipboard } from "react-icons/fa";
import { marked } from "marked";

export const PtgLangChainChatbot = ({ genAIKey }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copyMessages, setCopyMessages] = useState({});

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash",
    googleApiKey: genAIKey, // Accept the key dynamically
  });

  const handleSend = async () => {
    if (!input.trim() && !image) return;
    setLoading(true);

    try { 
      const modelAI = model.getGenerativeModel({ model: "gemini-1.5-flash" });

      const contentToSend = image
        ? [
            input,
            {
              inlineData: {
                data: image.split(",")[1],
                mimeType: image.match(/^data:(.*?);/)?.[1] || "image/png",
              },
            },
          ]
        : [input];

      const response = await modelAI.generateContent(contentToSend);

      setMessages((prev) => [
        ...prev,
        { text: input, image, sender: "user" },
        { text: response.response.text(), sender: "ai" },
      ]);
      setInput("");
      setImage(null);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessages((prev) => ({ ...prev, [id]: "Copied!" }));
        setTimeout(() => setCopyMessages((prev) => ({ ...prev, [id]: "" })), 1000);
      })
      .catch((err) => console.error("Copy failed", err));
  };

  const renderMessage = (msg, index) => {
    const html = marked(msg.text);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    return (
      <div className="messageText">
        {Array.from(tempDiv.childNodes).map((node, i) =>
          node.nodeName === "PRE" ? (
            <div key={`code-${index}-${i}`} className="codeBlock">
              <pre>
                <button onClick={() => copyToClipboard(node.innerText.trim(), `code-${index}-${i}`)}>
                  <FaClipboard />
                </button>
                <span>{copyMessages[`code-${index}-${i}`]}</span>
                {node.innerText.trim()}
              </pre>
            </div>
          ) : (
            <div key={`text-${index}-${i}`} className="message">{node.innerText}</div>
          )
        )}
      </div>
    );
  };

  return (
    <div className="chatContainer">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={`message-${index}`} className={`message ${msg.sender}`}>
            {msg.text && renderMessage(msg, index)}
            {msg.image && <img src={msg.image} alt="Uploaded" className="uploadedImage" />}
          </div>
        ))}
        {loading && <div className="loadingIndicator">{!genAIKey ? "Enter API Key..." : "Loading..."}</div>}
      </div>

      <div className="inputContainer">
        <input
          disabled={loading}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
        />
        <label htmlFor="file-upload" className="uploadIcon">
          <FaPaperclip />
        </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} disabled={loading} className="hiddenFileInput" />
        {image && (
          <div className="previewContainer">
            <img src={image} alt="Preview" className="previewImage" />
            <button className="deleteImageBtn" onClick={() => setImage(null)}>
              <FaTrash />
            </button>
          </div>
        )}
        <button onClick={handleSend} disabled={loading}>Send</button>
      </div>
    </div>
  );
};

PtgLangChainChatbot.propTypes = {
  genAIKey: PropTypes.string.isRequired,
};

export default PtgLangChainChatbot;
