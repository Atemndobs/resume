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
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
// In your component or a separate Supabase utility file
import { supabase } from "../api/supabaseClient"; // Adjust the path based on your project structure
import { useEffect, useState } from "react";

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
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Bertrand Atemkeng - Resume",
  description: "Resume of Bertrand Atemkeng.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Atem.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based{" "}
        <strong className="text-stone-100">Full Stack Software Engineer</strong>
        , currently working at{" "}
        <strong className="text-stone-100">Instant Domains</strong> helping
        build a modern, mobile-first, domain registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in{" "}
        <strong className="text-stone-100">Muay Thai</strong>, plucking my{" "}
        <strong className="text-stone-100">banjo</strong>, or exploring
        beautiful <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/bertrand_atemkeng_resume_en_2024_march.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  title: "About me",
  profileImageSrc: profilepic,
  description: `

Leading product development with a focus on strategic road mapping, stakeholder communication, and systems engineering; 
guiding cross-functional teams, mindful of budget constraints while continuously striving for success.

  `,
  aboutItems: [
    { label: "Location", text: "Dusseldorf", Icon: MapIcon },
    {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {
      label: "Interests",
      text: "Music/DJ, Low code, DevOps",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Vrije Universiteit Brussel (VUB) & " +
          "Universiteit Ghent (Ugent), Belgium.",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "CGI, Düsseldorf NRW",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 10,
      },
      {
        name: "German",
        level: 10,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Laravel",
        level: 9,
      },
      {
        name: "Node.js",
        level: 7,
      },
      {
        name: "python",
        level: 6,
      },
    ],
  },
  {
    name: "DevOps",
    skills: [
      {
        name: "Docker",
        level: 8,
      },
      {
        name: "Kubernetes",
        level: 6,
      },
      {
        name: "Terraform",
        level: 5,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "Vue.js",
        level: 6,
      },
      {
        name: "Next.js",
        level: 4,
      },
      {
        name: "React expo",
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage4,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage5,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "October 2023 – December 2023",
    location: "Harvard Business School Online",
    title: "Certificate in Business Strategy",
    content: (
      <p>
        Business Strategy equips professionals with a simplified framework they
        can immediately apply to create value for customers, employees, and
        suppliers while maximizing returns and an organization’s competitive
        edge. Participants learn to evaluate trade-offs and align, prioritize,
        and formulate strategic initiatives for the greatest business
        impact.Business Strategy equips professionals with a simplified
        framework they can immediately apply to create value for customers,
        employees, and suppliers while maximizing returns and an organization’s
        competitive edge. Participants learn to evaluate trade-offs and align,
        prioritize, and formulate strategic initiatives for the greatest
        business impact.
      </p>
    ),
  },
  {
    date: "September 2009 – September 2012",
    location:
      "Vrije Universiteit Brussel (VUB) & Universiteit Ghent (Ugent), Belgium",
    title: "Masters in Land Resources Engineering",
    content: (
      <p>
        During my masters, I dived deep into the challenges of slope stability
        at a regional scale. This experience wasn't just about the
        technicalities of land resources engineering; it was a journey through
        critical thinking, problem-solving, and sustainable design. My thesis
        allowed me to explore these concepts in depth, equipping me with a
        robust understanding of environmental engineering that I carry into my
        professional life.
      </p>
    ),
  },
  {
    date: "September 2005 – August 2008",
    location: "National Advanced School of Public Works, Yaoundé, Cameroon",
    title: "Bachelors in Civil Engineering",
    content: (
      <p>
        My undergraduate studies laid the foundation of my engineering career.
        Here, I learned not just the principles of civil engineering but also
        the importance of precision, planning, and perseverance. The program was
        rigorous, challenging me to think beyond textbooks and apply my
        knowledge in practical scenarios. It's where I developed a keen interest
        in sustainable infrastructure, a theme that has influenced my career
        path ever since.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "November 2022 – present",
    location: "CGI, Düsseldorf, NRW",
    title: "Senior Consultant | Technical Project Manager",
    content: (
      <p>
        - Lead the development of critical features for a large, highly
        customized B2B Magento-based e-commerce platform - team size 5 <br />
        - integrating custom logic for functionalities such as quick order,
        Order management with Manhattan OMS, search with Algolia & reindexing.{" "}
        <br />
        - Implementation of application & database optimizations that led to a
        20% performance boost on the platform and significant increase in
        customer satisfaction (as reported by improved NPS scores). <br />
        - Drove the adoption of new technologies such as Algolia for search,
        Websockets for asynchronously handling add to cart actions. <br />
        - Perform code reviews, mentor junior devs with tailored roadmaps &
        onboarding new members <br />- Develop & manage the containerization of
        the dev stack using Docker, automate dev tools, & support the DevOps
        team with CI/CD integration.
      </p>
    ),
  },
  {
    date: "June 2021 – November 2022",
    location: "CGI, Düsseldorf, NRW",
    title: "Lead Consultant | Technical Project Manager",
    content: (
        <p>
          - As TPM for a Large e-commerce B2B pet foods platform, I was responsible for supporting project managers,
          BAs, and engineers throughout all project phases, from system design through implementation (team size: 12). <br />
          - SPOC for the premium jewelry B2B e-commerce platform (team size: 3).
          Leading the engineering team to deliver the Magento migration project as well as new features, following agile principles.
        </p>
    ),
  },
  {
    date: "September 2009 – September 2012",
    location: "Fashionette AG, Düsseldorf, NRW (Luxury fashion startup)",
    title: "Software Engineer",
    content: (
      <p>
        At Fashionette AG, I was instrumental in developing and maintaining
        REST-APIs for our B2C e-commerce platform, using Laravel and Lumen
        within a microservice architecture. This role was pivotal in
        understanding how technology and fashion can intersect to create
        seamless consumer experiences.
      </p>
    ),
  },
  {
    date: "September 2005 – August 2008",
    location: "Marketing Factory Consulting GmbH, Düsseldorf, NRW",
    title: "Junior Web Developer (Backend)",
    content: (
      <p>
        Starting my career as a junior web developer, I was involved in
        developing REST APIs for domain management and creating web apps using
        Laravel and Vue.js. This experience was crucial in honing my backend
        development skills and understanding the dynamics of team collaboration.
      </p>
    ),
  },
  {
    date: "June 2016 - November 2017",
    location: "Europe Region Plant Engineering UPS",
    title: "Project Engineer",
    content: (
      <p>
        My tenure as a project engineer involved the meticulous planning and
        supervision of a significant sorting center relocation project. It was a
        masterclass in logistics, contract management, and cost control,
        providing me with a comprehensive view of the operational challenges in
        large-scale projects.
      </p>
    ),
  },
  {
    date: "Juli 2014 - June 2016",
    location: "UPS Düsseldorf, NRW",
    title: "Management Trainee - Operations",
    content: (
      <p>
        UPS Düsseldorf This phase of my career was about immersion in the
        operational side of UPS, from on-road supervision to dispatching and
        beyond. It was a hands-on learning experience in logistics and
        operations management, offering insights into the complexities of supply
        chain logistics.
      </p>
    ),
  },
  {
    date: "October 2013 - June 2014",
    location: "Self-owned Catering Business, Halle Saale, Germany",
    title: "Entrepreneur",
    content: (
      <p>
        Venturing into entrepreneurship with a catering business taught me about
        the nuances of managing a small enterprise—from marketing and event
        organization to customer service and bookkeeping. It was a journey
        through the highs and lows of entrepreneurship, each step filled with
        valuable lessons.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

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
      type: ContactType.Email,
      text: "bertrand@atemkeng.de",
      href: "mailto:bertrand@atemkeng.de",
    },
    {
      type: ContactType.Location,
      text: "Dusseldorf, Germany",
      href: "https://maps.app.goo.gl/fAdM7Hbw2aN6uE5NA",
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: "Atemndobs",
      href: "https://github.com/Atemndobs",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // { label: "Github", Icon: GithubIcon, href: "https://github.com/tbakerx" },
  // {
  //   label: "Stack Overflow",
  //   Icon: StackOverflowIcon,
  //   href: "https://stackoverflow.com/users/8553186/tim-baker",
  // },
  // {
  //   label: "LinkedIn",
  //   Icon: LinkedInIcon,
  //   href: "https://www.linkedin.com/in/timbakerx/",
  // },
  // {
  //   label: "Instagram",
  //   Icon: InstagramIcon,
  //   href: "https://www.instagram.com/reactresume/",
  // },
  // {
  //   label: "Twitter",
  //   Icon: TwitterIcon,
  //   href: "https://twitter.com/TimBakerx",
  // },
];
