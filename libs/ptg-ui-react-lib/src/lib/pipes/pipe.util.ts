export const capitalizeFirstLetter = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const truncateString = (value) => {
  return value.length > 10 ? value.slice(0, 10) + '...' : value;
};

export const formatINR = (number) => {
  let rupeeFormat;
  if (isNaN(parseInt(number))) {
    rupeeFormat = '';
  } else {
    rupeeFormat = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(number);
  }

  return rupeeFormat;
};

export const formatPhoneNumber = (value) => {
  value =
    value.slice(0, 1) === '+'
      ? value.replace(/\D/g, '').slice(1)
      : value.replace(/\D/g, '');
  value = '+1' + value;
  const countryCodeStr = value.slice(0, 2);
  const areaCodeStr = value.slice(2, 5);
  const midSectionStr = value.slice(5, 8);
  const lastSectionStr = value.slice(8);
  return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
};
