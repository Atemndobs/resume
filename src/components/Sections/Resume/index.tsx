import { FC, memo } from "react";

import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";

import { education, experience, SectionId, skills } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";
// Assuming ContactValueMap is exported from the same file as your contact data
import { contact } from '../../../data/links';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: "Email" },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: "Phone" },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: "Location" },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: "Github" },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: "LinkedIn" },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: "Facebook" },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: "Twitter" },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: "Instagram" },
};

import Socials from "../../Socials";
import {ContactType, ContactValue} from "../../../data/dataDef";
import GithubIcon from "../../Icon/GithubIcon";
import LinkedInIcon from "../../Icon/LinkedInIcon";
import FacebookIcon from "../../Icon/FacebookIcon";
import TwitterIcon from "../../Icon/TwitterIcon";
import InstagramIcon from "../../Icon/InstagramIcon";

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">
            Home selected skills that I have acquired over the years.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup
                key={`${skillgroup.name}-${index}`}
                skillGroup={skillgroup}
              />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Links">
          <p className="pb-8">
            You can find me on the following platforms.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {contact.items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                  <a
                      key={srLabel}
                      href={href}
                      target="_blank"
                      className="flex items-center space-x-3  hover:text-orange-500"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5"/>
                    <span>{text}</span>
                  </a>
              );
            })}
          </div>

        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = "Resume";
export default Resume;


// {
//   type: ContactType.Github,
//       text: "Atemndobs",
//     href: "https://github.com/Atemndobs",
// },