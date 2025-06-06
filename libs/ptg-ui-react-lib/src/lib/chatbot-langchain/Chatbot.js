import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Chatbot.css';
import { FaPaperclip, FaTrash, FaClipboard } from 'react-icons/fa';
import { marked } from 'marked';
import { modelOptions } from '../constants/Constants';
export const PtgLangChainChatbot = ({ Ai_Providers, genAIKey }) => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [copyMessages, setCopyMessages] = useState({});
	const [selectedModel, setSelectedModel] = useState('google-ai');
	const [modelProvider, setModelProvider] = useState(null);

	useEffect(() => {
		setModelProvider(Ai_Providers[selectedModel]?.());
	}, [selectedModel, Ai_Providers]);

	const handleSend = async () => {
		if (!input.trim() && !image) return;
		setLoading(true);

		try {
			const contentToSend = image ? [image.split(',')[1]] : [input];
			const response = await modelProvider?.invoke(contentToSend);

			setMessages((prev) => [
				...prev,
				{ text: input, image, sender: 'user' },
				{ text: response?.content, sender: 'ai' },
			]);
			setInput('');
			setImage(null);
		} catch (error) {
			console.error('Error generating content:', error);
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

	const resetCopyMessage = (id) => {
		setCopyMessages((prev) => ({ ...prev, [id]: '' }));
	};

	const copyToClipboard = (text, id) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopyMessages((prev) => ({ ...prev, [id]: 'Copied!' }));
				setTimeout(() => resetCopyMessage(id), 1000);
			})
			.catch((err) => console.error('Copy failed', err));
	};

	const handleModelChange = (event) => {
		const selectedValue = event.target.value;
		setSelectedModel(selectedValue);
		setModelProvider(Ai_Providers[selectedValue]?.());
		setMessages([]);
		setLoading(false);
		setImage(null);
	};

	const renderMessage = (msg, index) => {
		const html = marked(msg.text);
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;

		return (
			<div className="messageText">
				{Array.from(tempDiv.childNodes).map((node, i) =>
					node.nodeName === 'PRE' ? (
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
						<div key={`text-${index}-${i}`} className="message">
							{node.innerText}
						</div>
					)
				)}
			</div>
		);
	};

	return (
		<div className="chatContainer">
			<div className="messages">
				{messages.map((msg, index) => (
					<div key={`${msg.sender}-${index}`} className={`message ${msg.sender}`}>
						{msg.text && renderMessage(msg, index)}
						{msg.image && <img src={msg.image} alt="Uploaded" className="uploadedImage" />}
					</div>
				))}
				{loading && <div className="loadingIndicator">{!genAIKey ? 'Enter API Key...' : 'Loading...'}</div>}
			</div>

			<div className="inputContainer">
				<input
					disabled={loading}
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === 'Enter' && handleSend()}
					placeholder="Type your message..."
				/>
				<label htmlFor="file-upload" className={`uploadIcon ${selectedModel !== 'google-ai' ? 'disabledIcon' : ''}`}>
					<FaPaperclip />
				</label>
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					className="hiddenFileInput"
					disabled={loading || selectedModel !== 'google-ai'}
				/>
				{image && (
					<div className="previewContainer">
						<img src={image} alt="Preview" className="previewImage" />
						<button className="deleteImageBtn" disabled={loading} onClick={() => setImage(null)}>
							<FaTrash />
						</button>
					</div>
				)}
				<select value={selectedModel} disabled={loading} onChange={handleModelChange} className="modelDropdown">
					{modelOptions.map((option) => (
						<option key={option.value} value={option.value} disabled={option.label.toLowerCase().includes('paid')}>
							{option.label}
						</option>
					))}
				</select>
				<button className="send-button" onClick={handleSend} disabled={loading}>
					Send
				</button>
			</div>
		</div>
	);
};

PtgLangChainChatbot.propTypes = {
	genAIKey: PropTypes.string.isRequired,
	Ai_Providers: PropTypes.object.isRequired,
};

export default PtgLangChainChatbot;
