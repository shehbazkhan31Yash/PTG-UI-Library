'use client'


import Link from "next/link";
import TeamsImage from 'public/icons/team-ic-hover.png'
const About = () => {

  const teamMembersSampleData=[
    {
      memberImage: 'MTS',
      memberName: "Michelle Stricker",
      qualification: "B.S",
      designation:"SCIENTIST",
      researchArea: 'Thermal Analysis',
    },
    {
        memberImage: 'VI',
        memberName: "Valentina Ionova",
        qualification: "Ph.D",
        designation:"SCIENTIST",
        researchArea: "Thermal Analysis, Sensitivity Testing",
      },
      {
        memberImage: 'TF',
        memberName: "Travis Feaker",
        qualification: "M.S",
        designation:"SCIENTIST",
        researchArea: "Reaction Calorimetry, PAT",
      },
      {
        memberImage: 'ME',
        memberName: "Mohamed Elmansy",
        qualification: "Ph.D",
        designation:"SENIOR SCIENTIST",
        researchArea: "Reaction Calorimetry, PAT",
      },
  ]
  const usefulLinksSampleData=[
    {
        contact: "14146979-LS",
        contactName: "Chemical Hazard Assessment"
    },
    {
        contact: "20537369",
        contactName: "Process and Chemical Hazard Assessment Screening"
    },{
        contact: "89045",
        contactName: "Hazard Evaluation (HE) Sample Submission Guidelines"
    },{
        contact: "119635222-LS",
        contactName: "Instruction for Hazard Evaluation Requests"
    },{
        contact: "14197888-LS",
        contactName: "High Energy Molecules"
    },{
        contact: "14145543-LS",
        contactName: "High Hazard Reaction List"
    },

  ]

  return (
    <div className="pl-8 pr-1 py-3 bg-neutral-010 space-y-5">
   <p>About Coming soon.....</p>
    </div>
  );
};

export default About;
