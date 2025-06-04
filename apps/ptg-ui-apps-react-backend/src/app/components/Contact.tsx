import React from 'react';
import './Style/Contact.css'; // Import the CSS file for styling
import SujalImage from '../../assets/images/UI-Sujal.jpg'; // Importing an example image
import NitinImage from '../../assets/images/UI-Nitin.jpg'; // Importing an example image
import LokeshImage from '../../assets/images/UI-Lokesh.jpg'; // Importing an example image
import LokeshDaiyaImage from '../../assets/images/UI-Lokesh.jpeg'; // Importing an example image

const ContactUs = () => {
  const contacts = [
    {
      name: 'Nitin Gupta',
      designation: 'Business Unit Head',
      email: 'nitin@yash.com',
      photo: NitinImage,
    },
    {
      name: 'Lokesh Sapre',
      designation: 'Competency Head',
      email: 'lokesh.sapre@yash.com',
      photo: LokeshImage,
    },
    {
      name: 'Sujal Ray',
      designation: 'Resource Competency Manager',
      email: 'sujal.ray@yash.com',
      photo: SujalImage,
    },
    {
      name: 'Lokesh Daiya',
      designation: 'Solution Architect',
      email: 'lokesh.daiya@yash.com',
      photo: LokeshDaiyaImage,
    },
  ];
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  );
};
export default ContactUs;

const Contact = ({ name, designation, email, photo }) => {
  return (
    <div className="contact-card">
      <img src={photo} alt={name} className="contact-photo" />
      <div className="contact-info">
        <h2>{name}</h2>
        <p className="designation">{designation}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};
