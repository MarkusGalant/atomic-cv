import React from 'react'

import TimelineCard from '../../atoms/timeline-card'

type ExperienceCardProps = React.PropsWithChildren & {
  project: string;
  company: string;
  durantion: string;
  descriptions: string[];
  technologies: string;
};

function ExperienceCard ({ project, company, durantion, descriptions, technologies }: ExperienceCardProps) {
  return (
    <TimelineCard
      header={<>{project} <span className="text-muted h6"> {company}</span></>}
      subHeader={durantion}
    >
      {descriptions.map(item => <li key={item}>{item}</li>)}
      <div className='mt-1 mt-md-2'><b>{technologies}</b></div>
    </TimelineCard>
  )
}

export default ExperienceCard
