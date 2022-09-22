import React from 'react'

import TimelineCard from '../../atoms/timeline-card'

type EducationCardProps = {
  degree: string;
  location: string;
  durantion: string;
};

function EducationCard ({ degree, durantion, location }: EducationCardProps) {
  return (
    <TimelineCard
      header={<>{degree} <span className="text-muted h6"> {location}</span></>}
      subHeader={durantion}
    />
  )
}

export default EducationCard
