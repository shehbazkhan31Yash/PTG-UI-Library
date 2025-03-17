// Pagination
interface IBreadcrumbItem {
	title: string;
	link?: string;
}

//FormGroup
export interface IFormGroupProps {
	label?: string;
	required?: boolean;
	children?: React.ReactNode;
}

//Breadcrumb
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

//Calendar
type DateType = string | Date | null;

export interface IPtgUiCalendarProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	date?: Date;
	selected?: DateType;
	className?: string;
	startDate?: DateType;
	endDate?: Date | null;
	disabled?: boolean;
	accessKey?: string;
	showTimeSelect?: boolean;
	dateFormat?: string;
	isDateTime?: boolean;
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
	oktaButtonName?: string;
	forgotPasswordLabel?: string;
	imgPath?: string;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
	user?: IUserLogin;
	emailType?: string;
	passwordType?: string;
	isEmailValid?: boolean;
	onLoginClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	onMsalClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
	onOktaClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
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
interface ICityOption {
	value: string; // The value associated with the city
	label: string; // The display label for the city
	name: string; // The name of the field (in this case, it seems to be 'city')
}

interface IGenderOption {
	value: string; // The value associated
	id: string; // The display label
	name: string; // The name of the field
}

export interface PtgUiSignupProps {
	handleCheckChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	user?: IUserSignup;
	formErr?: IFormErr;
	isDisabled: (user: IUserSignup, date: Date | null | string, selectedCheck: boolean, formErr: IFormErr) => void;
	date?: Date | null | string;
	selectedCheck?: boolean;
	onSubmit?: () => void;
	errorMessage?: string;
	successMessage?: string;
	cityList?: ICityOption[];
	genderList?: IGenderOption[];
}
export interface IUserDetails {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
	greeting: string;
	gender: string;
	phone: string;
	zipCode: string;
	state: string;
	homeAddress: string;
	country: string;
	cardType: string;
	cardNumber: string;
	cvc: string;
	expiration: string;
	cardHolder: string;
}

export interface IUserErrors {
	firstName: boolean;
	lastName: boolean;
	userName: boolean;
	email: boolean;
	password: boolean;
	confirmPassword: boolean;
	greeting: boolean;
	gender: boolean;
	phone: boolean;
	zipCode: boolean;
	state: boolean;
	homeAddress: boolean;
	country: boolean;
	cardType: boolean;
	cardNumber: boolean;
	cvc: boolean;
	expiration: boolean;
	cardHolder: boolean;
}

export interface IPtgUiMultiStepState {
	stepCount: number;
	showNext?: () => void;
}

export interface IStep {
	id: number;
	label: string;
}
export interface IPtgUiMultiStepProps {
	error?: IUserDetails;
	details?: IUserDetails;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	resetForm?: () => void;
	submitForm?: () => void;
}

export interface IPtgUiMultiStepFormProps {
	stepperSteps?: IStep[];
	allSteps?: React.ReactElement<IPtgUiMultiStepProps>[];
	resetForm?: () => void;
	submitForm?: () => void;
	manageNextStepValidation?: (step: number) => boolean;
	orientation?: string;
}

export interface PtgUiCommonStepProps {
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	details?: IUserDetails;
	error?: IUserDetails;
}

export interface IStepperProps {
	steps?: IStep[];
	activeStep?: number;
	orientation?: string;
}
