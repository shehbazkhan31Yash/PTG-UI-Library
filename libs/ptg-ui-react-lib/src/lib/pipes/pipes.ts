export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * @author Anmol
 * @since April 2022
 * @uses function for format number to dollar value ex. 60 => ₹60.00
 *
 */

export const inrFormat = (number: number) => {
	const rupeeFormat: string = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'INR',
	}).format(number);

	return rupeeFormat;
};

/**
 * @author Ankit
 * @since April 2022
 * @uses function for trucate string
 *
 */
export const truncateString = (str: string, num = 10) => {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
};

export const phoneNumber = (tel: string | number) => {
	const value = tel.toString().trim().replace(/^\+/, '');

	let city: string, number: string;

	if (value.length === 10) { 
		city = value.slice(0, 3);
		number = value.slice(3);
	} else {
		return tel;
	}

	number = number.slice(0, 3) + '-' + number.slice(3);

	return ('+1 (' + city + ') ' + number).trim();
};

export const convertIntoPhoneNumber = (value: string) => {
	if (value.startsWith('+')) value = value.replace(/\D/g, '').slice(1);
	else value = value.replace(/\D/g, '');
	value = '+1' + value;
	const countryCodeStr = value.slice(0, 2);
	const areaCodeStr = value.slice(2, 5);
	const midSectionStr = value.slice(5, 8);
	const lastSectionStr = value.slice(8);
	const result = `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
	return result;
};
