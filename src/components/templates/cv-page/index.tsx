import React from 'react'

import Block from '../../atoms/block'
import TimelineWrapper from '../../atoms/time-line-wrapper'

import Cover from '../../molecules/cover'
import Skils from '../../molecules/skils'

import EducationCard from '../../molecules/education-card'
import ExperienceCard from '../../molecules/experience-card'

import Contact from '../../organisms/contact'

import Page from '../page'

type SkillItem = {
  name: string;
  items: string[];
}
type ExperienceItem = {
  project: string;
  company: string;
  durantion: string;
  descriptions: string[];
  technologies: string;
}

type EducationItem = {
  degree: string;
  location: string;
  durantion: string;
}

type CvPageProps = {
  avatarUrl: string;
  fullName: string;
  position: string;
  address: string;
  email: string;
  phone: string;

  skills: SkillItem[];
  experiences: ExperienceItem[];
  educations: EducationItem[];

  formspree: string;
}

function CvPage (props: CvPageProps) {
  const { avatarUrl, fullName, position, address, email, phone, skills, experiences, educations, formspree } = props

  return (
    <Page>
      <Cover avatar={avatarUrl} title={fullName} subTitle={position}>
        <div className="d-print-none">
          <a className="btn btn-light text-dark shadow-sm mt-1 me-1" href="./Mark Galant_CV.pdf" target="_blank">
            Download CV
          </a>
          <a className="btn btn-success shadow-sm mt-1" href="#contact">
            Hire Me
          </a>
        </div>
      </Cover>
      <div className="py-2 py-lg-2" />
      <Block title="Skils">
        <div className="row">
          {skills.map((it, i) =>
            (<div className="col-6 col-md-3 py-2" key={`skill-${i}`}>
            <Skils title={it.name} items={it.items} />
          </div>
            ))}
        </div>
      </Block>

      <Block title="Work Experience">
        <TimelineWrapper>
          {experiences.map(it => <ExperienceCard key={it.project} {...it} />)}
        </TimelineWrapper>
      </Block>

      <Block title="Education">
        <TimelineWrapper>
          {educations.map(it => <EducationCard key={it.degree} {...it} />)}
        </TimelineWrapper>
      </Block>

      <Block title="Contact">
        <Contact
          id="contact"
          formAction={formspree}
          info={{
            address,
            email,
            phone
          }} />
      </Block>
    </Page>
  )
}

export default CvPage
