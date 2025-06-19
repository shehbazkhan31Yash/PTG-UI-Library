import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  FaClipboardList,
  FaPaintBrush,
  FaMobileAlt,
  FaMousePointer,
  FaUniversalAccess,
  FaUserCheck,
  FaBookOpen,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa';
const Services: React.FC = () => {
  const services = [
    {
      title: 'Wireframing & Prototyping',
      description:
        'Visualizing layouts and functionalities before development.',
      icon: <FaClipboardList />,
    },
    {
      title: 'Visual Design',
      description:
        'Crafting the aesthetic elements like color schemes and typography.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Responsive Design',
      description:
        'Ensuring adaptability across different devices and screen sizes.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Interaction Design',
      description: 'Designing interactive elements to boost user engagement.',
      icon: <FaMousePointer />,
    },
    {
      title: 'Accessibility Design',
      description: 'Implementing practices for inclusivity for all users.',
      icon: <FaUniversalAccess />,
    },
    {
      title: 'Usability Testing',
      description:
        'Evaluating the UI with real users for iterative improvements.',
      icon: <FaUserCheck />,
    },
    {
      title: 'Design Systems',
      description: 'Creating style guides for consistency across applications.',
      icon: <FaBookOpen />,
    },
    {
      title: 'Collaboration',
      description:
        'Working with developers for accurate design implementation.',
      icon: <FaUsersCog />,
    },
    {
      title: 'Continuous Improvement',
      description:
        'Monitoring feedback to enhance the UI based on user behavior.',
      icon: <FaChartLine />,
    },
  ];
  return (
    <section id="services" className="bg-light text-dark mt-5 p-4">
      <ListGroup className="bg-light border-0">
        {services.map((service, index) => (
          <ListGroup.Item
            key={index}
            className="bg-light text-dark border-0 d-flex align-items-center"
          >
            <span className="me-2">{service.icon}</span>
            <span>
              {index + 1}. <b>{service.title}</b>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};
export default Services;
