import React from 'react';
import Image from 'next/image';

interface CardProps {
  memberImage: any;
  memberName?: string;
  qualification?: string;
  designation?: string;
  researchArea?: string;
}

const TeamCard: React.FC<CardProps> = ({
  memberImage,
  memberName,
  qualification,
  designation,
  researchArea,
}) => {
  return (
    <div className="flex-row overflow-hidden text-center bg-white border rounded-m py-4">
      <Image
        className="inline-block h-40 w-40 rounded-full ring-2 ring-white pb-1"
        src={memberImage}
        alt={''}
        aria-label={''}
      />
      <h5 className="pt-4">{`${memberName}, ${qualification}`}</h5>
      <h5>{designation}</h5>
      <p className="text-neutral-500">{researchArea}</p>
    </div>
  );
};

export default TeamCard;
