import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Chat.css'; // You can create a CSS file for styling
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaPaperclip, FaTrash, FaClipboard } from 'react-icons/fa';
import { marked } from 'marked';

export const PtgChatBot = ({ genAIKey }) => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [image, setImage] = useState({ data: null, mimeType: null });
	const [loading, setLoading] = useState(false);
	const genAI = new GoogleGenerativeAI(genAIKey);

	// State to manage the copy message
	const [copyMessages, setCopyMessages] = useState({});
	const [buttonVisibility, setButtonVisibility] = useState({});

	const handleSend = () => {
		if (input.trim() || image.data) {
			requestAI();
		}
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage({ data: reader.result, mimeType: file.type });
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDeleteImage = () => {
		setImage({ data: null, mimeType: null });
	};

	const requestAI = async () => {
		setLoading(true);
		let generatedContent;
		try {
			const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
			const contentToSend = image.data
				? [
						input,
						{
							inlineData: {
								data: image.data.split(',')[1],
								mimeType: image.mimeType,
							},
						},
				  ]
				: [input];
			generatedContent = await model.generateContent(contentToSend);
			setMessages((prevMessages) => [
				...prevMessages,
				{ text: input, image, sender: 'user' },
				{ text: generatedContent.response.text(), sender: 'ai' },
			]);
			setInput('');
			handleDeleteImage();
		} catch (error) {
			console.error('Error generating content:', error);
		} finally {
			setLoading(false);
		}
	};

	const copyToClipboard = (text, id) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopyMessages((prev) => ({
					...prev,
					[id]: 'Code copied!', // Set the copy message for the specific code block
				}));
				setButtonVisibility((prev) => ({
					...prev,
					[id]: false, // Hide the button
				}));
				setTimeout(() => {
					setCopyMessages((prev) => ({
						...prev,
						[id]: '', // Clear the message after 1 second
					}));
					setButtonVisibility((prev) => ({
						...prev,
						[id]: true, // Show the button again
					}));
				}, 1000);
			})
			.catch((err) => {
				console.error('Failed to copy: ', err);
			});
	};

	const renderMessage = (msg, index) => {
		const html = marked(msg.text);
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;

		const elements = [];
		tempDiv.childNodes.forEach((node, i) => {
			if (node.nodeName === 'PRE') {
				const code = node.innerText.trim();
				const id = `code-${index}-${i}`; // Unique ID for each code block
				elements.push(
					<div key={id} className="codeBlock">
						<pre>
							{buttonVisibility[id] !== false && ( // Check visibility
								<button onClick={() => copyToClipboard(code, id)}>
									<FaClipboard />
								</button>
							)}
							{copyMessages[id] && <span className="copyMessage">{copyMessages[id]}</span>}
							{code}
						</pre>
					</div>
				);
			} else {
				elements.push(
					<div key={i} className="message">
						{node.innerText}
					</div>
				);
			}
		});
		return <div className="messageText">{elements}</div>;
	};

	return (
		<div className="chatContainer">
			<div className="messages">
				{messages.map((msg, index) => (
					<div key={`message-${msg.text}-${index}`} className={`message ${msg.sender}`}>
						{msg.text && renderMessage(msg)}
						{msg.image?.data && (
							<div className="imageContainer ">
								<img src={msg.image.data} alt="Uploaded" className="uploadedImage" />
							</div>
						)}
					</div>
				))}
				{loading && <div className="loadingIndicator">{!genAIKey ? 'Please Enter Key...' : 'Loading...'}</div>}
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
				<label htmlFor="file-upload" className="uploadIcon">
					<FaPaperclip />
				</label>
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					disabled={loading}
					className="hiddenFileInput" // Use CSS to hide
				/>
				{image.data && (
					<div className="previewContainer">
						<img src={image.data} alt="Preview" className="previewImage" />
						<button className="deleteImageBtn" onClick={handleDeleteImage}>
							<FaTrash />
						</button>
					</div>
				)}
				<button className="ptg-ui-aichatbot-button" onClick={handleSend} disabled={loading}>
					Send
				</button>
			</div>
		</div>
	);
};

PtgChatBot.propTypes = {
	genAIKey: PropTypes.string.isRequired,
};

export default PtgChatBot;
