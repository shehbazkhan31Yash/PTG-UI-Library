// Pagination 
export interface IBreadcrumb {
    title: string;
    link: string;
  }

export interface ICardItems {
  id: number;
  image: string;
  title: string;
  content: string;
  button: string;
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


  
  
 


