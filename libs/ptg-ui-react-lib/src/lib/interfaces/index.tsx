// Pagination
interface IBreadcrumbItem {
	title: string;
	link: string;
}

export interface IPtgUiBreadcrumbsProps {
	datalist: IBreadcrumbItem[];
}

// Accordion
export interface IAccordionItemProps {
	title?: string;
	content?: string;
}
export interface IPtgUiAccordionProps {
	accordionItems: IAccordionItemProps[];
	handleToggle: (index: number) => void;
	activeIndex: number | null;
}

//Button
export const enum BUTTON_TYPE {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}
export interface IPtgUiButtonProps {
	variant?: string;
	active?: boolean;
	className?: string;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	appearance?: string;
	btnIconAlignment?: string;
	hasbtnIconSlot?: boolean;
	text?: string;
	disabled?: boolean;
	width?: string;
	height?: string;
	fontSize?: string;
	fontWeight?: string;
	textColor?: string;
	backgroundColor?: string;
	type?: 'button' | 'submit' | 'reset';
	border?: string;
}

//Cards
export interface ICardUiProps {
	image?: string;
	title?: string;
	description?: string;
	buttonText?: string;
	onClick?: () => void;
	buttonColor?: string;
	buttonWidth?: string;
	children?: React.ReactNode;
	imageWidth?: string;
	imageHeight?: string;
	backgroundColor?: string;
	buttonTextColor?: string;
}

// Carousel

export interface ICarouselProps {
	imgHeight?: string;
	imgWidth?: string;
	images?: string[];
	showIndicators?: boolean;
}

export interface IPtgUiBreadcrumbsProps {
	datalist: IBreadcrumbItem[];
}

// Accordion
export interface IAccordionItemProps {
	title?: string;
	content?: string;
}
export interface IPtgUiAccordionProps {
	accordionItems: IAccordionItemProps[];
	handleToggle: (index: number) => void;
	activeIndex: number | null;
}

export interface AlertProps {
	message?: string;
	type?: string;
}

//forgot password
export interface IForgotPassword {
	onForgotPasswordSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	fPasswordEmail?: (email: string) => void;
	forgotPasswordLabel?: string;
}

export interface IValues {
	show: boolean;
	email: string;
	btnDisable: boolean;
	showMessage: { show: boolean; type: string; message: string };
}

export interface IFormErrorForgotPWD {
	email: boolean;
	password: boolean;
}

export interface IState {
	values: IValues;
	formErr: IFormErrorForgotPWD;
}

//login
export interface IUserLogin {
	email: string;
	password: string;
}

export interface PtgUiLoginProps {
	emailLabel?: string;
	passwordLabel?: string;
	emailPlaceholder?: string;
	passwordPlaceholder?: string;
	loginButtonName?: string;
	signupMsg?: string;
	signupButtonName?: string;
	msalButtonName?: string;
	forgotPasswordLabel?: string;
	imgPath?: string;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
	user?: IUserLogin;
	emailType?: string;
	passwordType?: string;
	isEmailValid?: boolean;
	onLoginClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	onMsalClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	isForgotPassword?: boolean;
	onForgotPasswordSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	getForgetEmail?: (email: string) => void;
	errorMessage?: string;
	successMessage?: string;
}

export interface IUserSignup {
	username?: string;
	email?: string;
	gender?: string;
	city?: string;
	password?: string;
	confirmPassword?: string;
	error?: string | undefined | null;
	disable?: boolean;
}

export interface IFormErr {
	username?: boolean;
	email?: boolean;
	gender?: boolean;
	city?: boolean;
	password?: boolean;
	confirmPassword?: boolean;
}

export interface PtgUiSignupProps {
	handleCheckChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	user?: IUserSignup;
	formErr?: IFormErr;
	isDisabled: Function;
	date?: Date | null | string;
	selectedCheck?: boolean;
	onSubmit?: Function;
	errorMessage?: string;
	successMessage?: string;
}
