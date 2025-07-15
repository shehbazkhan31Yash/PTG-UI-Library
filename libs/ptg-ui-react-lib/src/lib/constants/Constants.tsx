export interface ICardButton {
	TEXT_COLOR: string;
	COLOR: string;
	WIDTH: string;
}

export const CARD_BUTTON = {
	TEXT_COLOR: '#fff',
	COLOR: '#052982',
	WIDTH: '165px',
	MAX_WIDTH: '100%',
	MAX_HEIGHT: '200px',
};

export const FORGOT_PASSWORD_BTN_COLOR = {
	FORGOT_BTN_TEXT: '#fff',
	FORGOT_BTN_BACKGROUND: '#052982',
	FORGOT_BTN_BACKGROUND_GRAY: '#959393',
};

export const COLOR = '#fff';
export const BACKGROUND_COLOR = '#052982';
export const WIDTH = '200px';

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
export const MODAL_SIZE_LARGE = 'lg';
export const BUTTON_CLASS = 'btn';

export const defaultMenuConfig = {
	backgroundColor: 'primary',
	static: false,
	position: 'top',
	textColor: '#fff',
	menuAlignment: 'right',
	logoAlignment: 'left',
	burgerMenu: false,
	burgerMenuType: 'drawer',
	menuItems: [],
	logo: '',
};

export const colorMap: Record<string, string> = {
	primary: '#2196F3',
	secondary: '#4CAF50',
};

export const modelOptions = [
  { value: "google-ai", label: "Google AI" },
  { value: "chat-groq-ai", label: "Chat Groq AI" },
  { value: "chat-together-ai", label: "Chat Together AI - paid" },
  { value: "chat-upstage-ai", label: "Chat Upstage AI - paid" },
  { value: "chat-bedrock-ai", label: "Chat Bedrock AI - paid" },
  { value: "chat-anthropic", label: "Chat Anthropic AI - paid" },
  { value: "chat-aistral-ai", label: "Chat Aistral AI - paid" },
  { value: "azure-chatOpen-ai", label: "Azure ChatOpen AI - paid" },
  {value: "chat-vertex-ai", label: "Chat Vertex AI - paid"},
  {value: "chat-mistral-ai", label: "Chat Mistral AI - paid"},
];
