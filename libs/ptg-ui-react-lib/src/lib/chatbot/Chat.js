import { useState } from 'react';
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

	const copyToClipboard = (text) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert('Code copied to clipboard!');
			})
			.catch((err) => {
				console.error('Failed to copy: ', err);
			});
	};

	const renderMessage = (msg) => {
		const codeBlocks = msg.text.match(/```(.*?)```/gs); // Match code blocks
		const messageContent = marked(msg.text).split(/<pre><code>|<\/code><\/pre>/g); // Split content into parts

		return (
			<div className="messageText">
				{messageContent.map((part, index) => {
					if (codeBlocks?.includes(part)) {
						const code = part.replace(/```/g, ''); // Remove the backticks
						return (
							<div key={index + 'chatbot-user'} className="codeBlock">
								<pre>{code}</pre>
								<button onClick={() => copyToClipboard(code)} title="Copy code">
									<FaClipboard />
								</button>
							</div>
						);
					}
					return <div key={index + 'chatbot-user'} dangerouslySetInnerHTML={{ __html: part }} />;
				})}
			</div>
		);
	};

	return (
		<div className="chatContainer">
			<div className="messages">
				{messages.map((msg, index) => (
					<div key={`message-${msg.text}-${index}`} className={`message ${msg.sender}`}>
						{msg.text && renderMessage(msg)}
						{msg.image?.data && (
							<div className="imageContainer">
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
				<button onClick={handleSend} disabled={loading}>
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
