import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";


import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "You can reach me at the following places. " + // add line break here.
    "I typically respond within 24 hours.",
  items: [
    {
      type: ContactType.LinkedIn,
      text: "Bertrand Ndobegang Atemkeng ",
      href: "https://www.linkedin.com/in/bertrand-ndobegeng-atemkeng/",
    },
    {
      type: ContactType.Github,
      text: "Atemndobs",
      href: "https://github.com/Atemndobs",
    },
    {
      type: ContactType.Instagram,
      text: '@the_blog',
      href: 'http://blog.atemkeng.de/',
    },
    {
      type: ContactType.Twitter,
      text: "the_docs",
      href: "http://docs.atemkeng.de/",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/tbakerx" },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/8553186/tim-baker",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/timbakerx/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/reactresume/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/TimBakerx",
  },
];
