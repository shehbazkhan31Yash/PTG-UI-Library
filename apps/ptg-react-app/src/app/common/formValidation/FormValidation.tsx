export const required = (value, fieldName, errors) => {
	if (!value) {
		errors[fieldName] = `${fieldName} is required`;
	}
};
export const lengthCheck = (value, fieldName, min, max, errors) => {
	if (value.length < min) {
		errors[fieldName] = `${fieldName} must be at least ${min} characters`;
	} else if (value.length > max) {
		errors[fieldName] = `${fieldName} must be ${max} characters or less`;
	}
};
