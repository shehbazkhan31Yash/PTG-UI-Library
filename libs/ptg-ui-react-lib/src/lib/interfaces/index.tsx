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
	handleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

//Date Picker
export interface PtgUiDatePickerProps {
	id?: string;
	placeholder?: string;
	value?: string | Date | null;
	sendSelectedDate?: (string) => void;
	className?: string;
	ariaLabel?: string;
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

//Checks
export interface PtgUiCheckboxProps {
	id?: string;
	name?: string;
	label?: string;
	value?: string;
	for?: string;
	htmlFor?: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

//Input
export interface PtgUiInputProps {
	type: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	inputsize?: string;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	ref?: React.Ref<HTMLInputElement>;
	maxlength?: string;
	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	id?: string;
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

// Radio
export interface PtgUiRadioProps {
	name?: string;
	value?: string;
	id?: string;
	htmlFor?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	list: { id: string; name: string; value: string }[];
	children?: React.ReactNode;
	checked?: boolean;
}

//select dropdown
export interface PtgUiSelectProps {
	name?: string;
	value?: string;
	id?: string;
	className?: string;
	list: { id: string; label: string; value: string }[];
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	htmlFor?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
}

//Textarea
export interface PtgUiTextAreaProps {
	placeholder?: string;
	className?: string;
	rows?: number;
	name?: string;
	id?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

//Toaster
export interface ToasterProps {
	show: boolean;
	setShow: (show: boolean) => void;
	message?: string;
	type?: string;
	showDescription?: boolean;
	closeIcon?: React.ReactNode;
	alignItem?: string;
	justifyContent?: string;
	timeToShow?: number;
	icon?: React.ReactNode;
}
export interface AlertProps {
	message?: string;
	type?: string;
}

//Loader
export interface PtgUiLoadingProps {
	type: string;
	color?: string;
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
	id: string;
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
	handleChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleBlur?: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void;
	details?: IUserDetails;
	error?: IUserDetails;
}

export interface IStepperProps {
	steps?: IStep[];
	activeStep?: number;
	orientation?: string;
}

export interface ICardProps {
	image?: string;
	title?: string;
	description?: { __html: string };
	backgroundColor?: string;
	shape?: 'circle' | 'square' | 'rectangle';
	maxWidth?: string;
	margin?: string;
	padding?: string;
}

interface ICarouselItem {
	id?: string;
	image?: string;
	title?: string;
	description?: { __html: string };
	backgroundColor?: string;
	shape?: 'circle' | 'square' | 'rectangle';
	imageWidth?: string;
	maxWidth?: string;
	margin?: string;
	padding?: string;
}

export interface ICarouselProps {
	items: ICarouselItem[];
	backgroundColor?: string;
	buttonPosition?: 'top' | 'middle' | 'bottom';
	buttonProps?: {
		iconLeft: string;
		iconRight: string;
		style?: React.CSSProperties;
	};
	navigationOnIcon?: boolean;
	navigationIconWidth?: string;
	navigationIconHeight?: string;
}

export interface IRatingProps {
	value?: number;
	onChange?: (value: number) => void;
	readOnly?: boolean;
	disabled?: boolean;
	precision?: 0.5 | 1;
	icon?: string;
	emptyIcon?: string;
	color?: string;
	borderColor?: string;
	size?: number;
	hoverSize?: number;
	defaultValue?: number;
	onHover?: (value: number) => void;
}

export interface PtgUiModalProps {
	isOpen?: boolean;
	onConfirmed?: any;
	modalSize?: string;
	showHeader?: boolean;
	header?: string;
	showFooter?: boolean;
	confirmButton?: string;
	cancelButton?: string;
	onModalClose?: any;
	backdropClick?: boolean;
	content?: string;
	confirmButtonColor?: string;
	cancelButtonColor?: string;
	children?: any;
}

export interface IMenuConfig {
	logo?: string;
	menuItems: React.ReactNode;
	backgroundColor?: 'primary' | 'secondary';
	textColor?: string;
	menuAlignment?: 'left' | 'right';
	logoAlignment?: 'left' | 'right';
	burgerMenu?: boolean;
	burgerMenuType?: 'drawer' | 'dropdown';
	position?: 'top' | 'bottom';
	static?: boolean;
}

export interface IAppBarProps {
	menuConfig: IMenuConfig;
	openMenu?: boolean;
	closeMenu?: (open: boolean) => void;
}

export interface PtgUiDownloadFileProps {
	allowFileTypes?: any;
	children?: any;
	excelColumns?: any;
	excelDataToDownload?: any;
	downloadBtnText?: string;
	downloadFileName?: string;
}

export interface IGridColumnUiProps {
	children: React.ReactNode;
	xl?: number;
	lg?: number;
	md?: number;
	sm?: number;
	xs?: number;
	offsetLg?: number;
	offsetMd?: number;
	offsetSm?: number;
	className?: string;
}

export interface RowUiProps {
	children?: React.ReactNode;
	className?: string;
}
