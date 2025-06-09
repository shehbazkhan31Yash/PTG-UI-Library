import React from 'react';
import TeamCard from './TeamCard/TeamCard';
import polaris_Image from '../../assets/images/polaris.jpg';
const Teams: React.FC = () => {
  const teamMembersSampleData = [
    {
      memberImage: polaris_Image,
      memberName: 'Michelle Stricker',
      qualification: 'B.S',
      designation: 'SCIENTIST',
      researchArea: 'Thermal Analysis',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Valentina Ionova',
      qualification: 'Ph.D',
      designation: 'SCIENTIST',
      researchArea: 'Thermal Analysis, Sensitivity Testing',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Travis Feaker',
      qualification: 'M.S',
      designation: 'SCIENTIST',
      researchArea: 'Reaction Calorimetry, PAT',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Mohamed Elmansy',
      qualification: 'Ph.D',
      designation: 'SENIOR SCIENTIST',
      researchArea: 'Reaction Calorimetry, PAT',
    },
  ];
  return (
    <section id="teams" className="bg-dark text-light mt-5 p-4">
      <div className="grid grid-cols-2 gap-6">
        {/* {teamMembersSampleData.map((data, index) => (
          <TeamCard
            key={index}
            memberImage={data.memberImage}
            memberName={data.memberName}
            qualification={data.qualification}
            designation={data.designation}
            researchArea={data.researchArea}
          />
        ))} */}
        <TeamCard
          memberImage={teamMembersSampleData[0].memberImage}
          memberName="FAIYAZUL"
          qualification={'B.TECH'}
          designation="FRONTEND DEVELOPER"
          researchArea="REACT JS, NEXT JS, TYPESCRIPT, JAVASCRIPT, HTML, CSS, TAILWIND CSS, BOOTSTRAP"
        />
      </div>
    </section>
  );
};
export default Teams;
